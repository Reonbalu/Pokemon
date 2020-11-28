import React from "react";
import { useHistory } from "react-router-dom";

const PokemonList = ({ pokemon }) => {
  const history = useHistory();
  return (
    <>
      {pokemon.map((poke, index) => (
        <li key={index}>
          {poke.name} {poke.url}
          <button
            onClick={() =>
              history.push({
                pathname: "/Test",
                state: { name: poke.name, url: poke.url }
              })
            }
          >
            About
          </button>
        </li>
      ))}
    </>
  );
};
export default PokemonList;
