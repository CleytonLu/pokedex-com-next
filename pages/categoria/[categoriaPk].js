import Card from "@/components/Card";
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

  const typesPerTypes = mockPokemons.map((item) => {
    return item.tipo;
  });

  const typesConcat = defType.concat(typesPerTypes);

  const filtedCategories = mockPokemons.filter((item) => {
    if (item.tipo.length > 1 === ("normal", "flying", "fire")) {
      return item;
    } else if (item.tipo == defType) {
      return item;
    }
  });

  // console.log(typesConcat);
  console.log(filtedCategories);

  return (
    <div
      className={`${styles.categoriaPk_content} ${styles["type_" + tipo.name]}`}
    >
      <h1>Pokemons {defType}</h1>

      <div className={styles.pokemon_container}>
        {filtedCategories.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
