import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

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
    <div>
      <h1>Pokdex</h1>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
      
    </div>
  )
}
