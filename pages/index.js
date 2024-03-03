// import InputPesquisa from '@/components/InputPesquisa';
import styles from "@/styles/Home.module.css";
import { useCallback, useState } from "react";
import Card from "../components/Card";

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=252");
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
  const [pagination, setPagination] = useState(20);
  const [valuePartPagination, setValuePartPagination] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);

  const pokemonsList = pokemons.slice(valuePartPagination, pagination);

  const quantityPokemonsItem = Math.round(pokemons.length / 20);

  const nextPagination = () => {
    setPagination((prev) => prev + 20);
    setValuePartPagination((prev) => prev + 20);
    setPageCurrent((prev) => ++prev);

    if (quantityPokemonsItem === pageCurrent) {
      setPagination(pagination);
      setValuePartPagination(valuePartPagination);
      setPageCurrent(pageCurrent);
    }
  };

  const prevPagination = useCallback(() => {
    setPagination((prev) => prev - 20);
    setValuePartPagination((prev) => prev - 20);
    setPageCurrent((prev) => --prev);

    if (pagination === 20) {
      setPagination(20);
      setValuePartPagination(0);
      setPageCurrent(1);
    }
  }, [pagination]);

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

      <div className={styles.pagination}>
        <button
          id={pagination === 20 ? styles.opacity : styles.prev}
          onClick={() => prevPagination()}
        >
          Anterior
        </button>
        <span id={styles.current}> {pageCurrent} </span>
        <button
          id={
            quantityPokemonsItem === pageCurrent ? styles.opacity : styles.next
          }
          onClick={() => nextPagination()}
        >
          Próximo
        </button>
      </div>
    </>
  );
}
