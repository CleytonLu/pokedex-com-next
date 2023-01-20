import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps(){
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}`)
  const data = await res.json()

  // add pokemon index
    data.results.forEach((item, index) => {
      item.id = index.id + 1
    });

  return {props: {
    pokemons: data.results
  }}
}

export default function Home({pokemons}) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>dex</span></h1>
        <Image src='/images/pokeball.png' width={50} height={50} alt="Pokedex" />
      </div>
      
      <div className={styles.pokemon_container}>
        {pokemons.map(pokemon => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </div>
      
    </>
  )
}
