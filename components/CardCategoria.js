import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Card.module.css'

export default function CardCategoria({pokemon}){

    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png

    return(
        <div className={styles.card}>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width={120} height={120} alt="Pokemon"
            />
            <p className={styles.id}>{pokemon.id}</p>
            <h3 className={styles.name}>{pokemon.name}</h3>
            <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}><label >Detalhes</label></Link>
        </div>
    )

}
