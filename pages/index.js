// import InputPesquisa from '@/components/InputPesquisa';
import styles from "@/styles/Home.module.css";
import Card from "../components/Card";
import { urlPokemon } from "@/utils/urlPokemon";
import { Pagination } from "@/components/pagination";
import { usePagination } from "@/hooks/usePagination";

export async function getStaticProps() {
  const res = await fetch(urlPokemon);
  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  const {
    nextPagination,
    prevPagination,
    pagination,
    pageCurrent,
    quantityPokemonsItem,
    valuePartPagination,
  } = usePagination({
    pokemons,
  });

  const pokemonsList = pokemons.slice(valuePartPagination, pagination);

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>dex</span>
        </h1>
      </div>

      <div className={styles.pokemon_container}>
        {pokemonsList.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      <Pagination
        nextPagination={nextPagination}
        pageCurrent={pageCurrent}
        pagination={pagination}
        prevPagination={prevPagination}
        quantityPokemonsItem={quantityPokemonsItem}
      />
    </>
  );
}
