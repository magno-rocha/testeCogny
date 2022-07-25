import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import React, { useState, useEffect } from "react";
import { Pagination } from "semantic-ui-react";
import axios from "axios";

const numStars = 150;

for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + "px";
  star.style.left = xy[1] + "px";
  document.body.append(star);
}

function getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

const App = () => {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [apiUrl, setApiUrl] = useState("https://swapi.dev/api/people/");

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setData(response.data.results);
    });
  }, [apiUrl]);

  const onChange = (i, pageInfo) => {
    setActivePage(pageInfo.activePage);
    setApiUrl(
      "https://swapi.dev/api/people/?page=" + pageInfo.activePage.toString()
    );
  };

  return (
    <div className="container">
      <header>
        <nav class="navbar navbar-expand-lg bg-dark">
          <div class="container">
            <a class="navbar-brand char-name" href="#">
              Teste Web
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link char-name" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <img src={logo} className="img-fluid logo" alt="logo" />
      <List className="container" data={data} />
      <nav class="customPag mymove">
        <Pagination
          activePage={activePage}
          onPageChange={onChange}
          totalPages={20}
          ellipsisItem={null}
          boundaryRange={1}
          siblingRange={4}
          data={data}
        />
      </nav>
    </div>
  );
};

export default App;
