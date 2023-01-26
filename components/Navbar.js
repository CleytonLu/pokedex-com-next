import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Navbar.module.css'

export default function Navbar(){

    return(
        <nav className={styles.navbar}>
            <div>
                <Link href='/' >
                    <div>
                    <Image className={styles.img} 
                        src="/images/pokeball.png" 
                        width={40} height={40} 
                        alt="Pokébola" />
                    </div> 
                </Link>
                
                <ul className={styles.links_nav}>
                    <Link className={styles.link} href='/'><li>Pokedex</li></Link>
                    <Link className={styles.link} href='/categoria'><li>Categorias</li></Link>
                </ul>
            </div>


        </nav>
    )
}