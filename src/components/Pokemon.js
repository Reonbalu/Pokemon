import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";

function Pokemon() {
  const currentPageUrl = "https://pokeapi.co/api/v2/pokemon";
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c))
      })
      .then((res) => {
        setLoading(false);
        const data = res.data.results;
        setPokemon(data);
      });

    return () => cancel();
  }, [currentPageUrl]);

  if (loading) return "Loading...";

  return (
    <>
      <PokemonList pokemon={pokemon} />
    </>
  );
}

export default Pokemon;
