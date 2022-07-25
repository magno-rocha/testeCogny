import React from "react";
import CharInfo from "./CharInfo";

const List = ({ data }) => {
  const cardList = data.map((user, i) => {
    return (
      <CharInfo
        key={user.url}
        name={user.name}
        height={user.height}
        mass={user.mass}
        birth_year={user.birth_year}
        gender={user.gender}
        hair_color={user.hair_color}
        skin_color={user.skin_color}
        eye_color={user.eye_color}
        species={user.species}
        films={user.films}
        starships={user.starships}
      />
    );
  });
  return (
    <div class="container text-center mymove">
      <div class="row g-2">
        <div class="col-12">
          <div className="col char-name">{cardList}</div>;
        </div>
      </div>
    </div>
  );
};

export default List;
