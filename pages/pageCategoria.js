import Link from "next/link";
import styles from "../styles/IndexCategoria.module.css";

export async function getStaticProps() {
  const res = await fetch(`https://pokeapi.co/api/v2/type/`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return { props: { tipos: data.results } };
}

export default function PageCategoria({ tipos }) {
  console.log(tipos);

  const typeToRemove = ["unknown", "shadow"];

  const filteredArray = tipos.filter((item) => !typeToRemove.includes(item));

  return (
    <div className={styles.CardTipo}>
      {filteredArray
        .map((tipo) => (
          <Link
            href={`/categoria/${tipo.id}`}
            key={tipo.id}
            className={styles.tipo}
          >
            <span className={`${styles.tipo} ${styles["type_" + tipo.name]}`}>
              {tipo.name}
            </span>
          </Link>
        ))
        .slice(0, 16)}
    </div>
  );
}
