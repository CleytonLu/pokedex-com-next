// import InputPesquisa from '@/components/InputPesquisa';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import { useMemo, useState } from 'react';
import Card from '../components/Card'

export async function getStaticProps(){

  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=252')
  const data = await res.json()

  // add pokemon index
    data.results.forEach((item, index) => {
      item.id = index + 1
    });

  return {props: {
    pokemons: data.results
  }}
}



export default function Home({pokemons}) { 

  const [event, setEvent] = useState('')

  const filter = useMemo(()=> {
    const lowerCase = event.toLowerCase();
    return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(lowerCase))
  }, [event]) 

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>dex</span></h1>
        <Image src='/images/pokeball.png' width={50} height={50} alt="Pokedex" />
      </div>

        {/* <InputPesquisa src='/images/iconSearch.png' width={20} height={20} placeholder="Busca Pokemon (ainda não está funcioanando)" /> */}
        
        <div className={styles.container_pesquisa}>
                <input  
                    onChange={(e) => setEvent(e.target.value)} 
                    value={event} 
                    type="search" 
                    placeholder="Busca Pokemon"
                    />
                <Image src={'/images/iconSearch.png'} width={20} height={20} alt ='Pesquisa'/>
            </div>

      <div className={styles.pokemon_container}>
        {filter.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      
    </>
  )
}
