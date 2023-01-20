import Image from "next/image"
import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div>
                <Image className={styles.img} src="/images/pokeball.png" width={40} height={40} alt="Pokébola" />
                <h1>Pokédex</h1>
            </div>
        </nav>
    )
}