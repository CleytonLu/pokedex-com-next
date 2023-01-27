import Link from 'next/link';
import styles from '../styles/IndexCategoria.module.css'
import { tipo } from './tipoPokemon'

export default function PageCategoria() {

    return (
        <div className={styles.CardTipo}>
            {tipo.map((tipo) => (
                <Link href={`/categoria/${tipo.id}`} key={tipo.name} className={styles.tipo}>
                    <span className={`${styles.tipo}${styles['type_' + tipo.name]}`}>{tipo.name}</span></Link>
            ))}
        </div>
    )
}