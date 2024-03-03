import Card from "@/components/Card";
import { GoTop } from "@/components/GoTop";
import styles from "../../styles/CategoriaPk.module.css";
import { mockPokemons } from "../Mock/mockPokemons";

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
export default function categoriaPk({ tipo }) {
  const defType = tipo.name;

  const filtedCategories = mockPokemons.filter((item) => {
    if (item.tipo.includes(defType)) {
      return item.tipo;
    }
    return;
  });

  console.log("todoOsTipos", filtedCategories);

  console.log("tipo", defType);

  return (
    <div className={`${styles.categoriaPk_content}`}>
      <h1 className={styles.title}>
        Pokemons
        <span className={`${styles["type_" + defType]} `}>{defType}</span>
      </h1>

      <div className={styles.pokemon_container}>
        {filtedCategories.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      <GoTop />
    </div>
  );
}
