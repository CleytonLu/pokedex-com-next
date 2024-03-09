import Card from "@/components/Card";
import styles from "../../styles/CategoriaPk.module.css";
import { mockPokemons } from "@/Mock/mockPokemons";
import { Pagination } from "@/components/pagination";
import { usePagination } from "@/hooks/usePagination";

export const getStaticPaths = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/type/");
  const data = await res.json();

  //  params e criação de id para a API
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { categoriaPk: (index + 1).toString() },
    };
  });

  return { paths: paths, fallback: false };
};

export async function getStaticProps(context) {
  const id = context.params.categoriaPk;

  const res = await fetch(`https://pokeapi.co/api/v2/type/${id}`);
  const data = await res.json();

  return { props: { tipo: data } };
}

// Página
export default function CategoriaPk({ tipo }) {
  const defType = tipo.name;

  const filtedCategories = mockPokemons.filter((item) => {
    if (item.tipo.includes(defType)) {
      return item.tipo;
    }
    return;
  });

  const {
    nextPagination,
    prevPagination,
    pagination,
    pageCurrent,
    quantityPokemonsItem,
    valuePartPagination,
  } = usePagination({ pokemons: filtedCategories });

  const pokemonsList = filtedCategories.slice(valuePartPagination, pagination);

  const isLarge = filtedCategories.length > 20 ? true : false;

  return (
    <div className={`${styles.categoriaPk_content}`}>
      <h1 className={styles.title}>
        Pokemons
        <span className={`${styles["type_" + defType]} `}>{defType}</span>
      </h1>

      <div className={styles.pokemon_container}>
        {pokemonsList.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      {isLarge && (
        <Pagination
          nextPagination={nextPagination}
          pageCurrent={pageCurrent}
          pagination={pagination}
          prevPagination={prevPagination}
          quantityPokemonsItem={quantityPokemonsItem}
        />
      )}
    </div>
  );
}
