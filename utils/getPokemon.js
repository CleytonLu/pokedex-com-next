import { urlPokemon } from "./urlPokemon";

export const getPokemon = async () => {
  const res = await fetch(urlPokemon);
  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    pokemons: data.results,
  };
};
