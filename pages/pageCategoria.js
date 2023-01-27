import Link from 'next/link';
import styles from '../styles/IndexCategoria.module.css'
import { tipo } from './tipoPokemon'

export async function getStaticProps() {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=252`)
    const data = await res.json()

    data.results.forEach((item, index) => {
        item.id = index + 1;
    });


    return {
        props: {
            pokemons: data.results
        }
    }
}

export default function PageCategoria({ pokemons }) {

    return (
        <div className={styles.CardTipo}>
            {tipo.map((tipo) => (
                <Link href={`/pageCategoria/${pokemons.id}`} key={tipo.id} className={styles.tipo}><span className={`${styles.tipo} ${styles['type_' + tipo.name]}`}>{tipo.name}</span></Link>
            ))}
        </div>
    )
}