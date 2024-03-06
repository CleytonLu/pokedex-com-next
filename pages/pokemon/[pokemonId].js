import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from '../../styles/Pokemon.module.css'
import { urlPokemon } from "@/utils/urlPokemon";


export const  getStaticPaths = async () => {

    const res = await fetch(urlPokemon);
    const data = await res.json()

    //  params e criação de id para a API
    const paths = data.results.map((pokemon, index)=> {
        return {
            params : {pokemonId: (index+1).toString()}
        }
    })

    return{paths: paths, fallback: false}
}

export const getStaticProps = async (context) => {

    const id = context.params.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    return{props: {pokemon: data}}
}

export default function PokemonId({pokemon}){

    const [menorUm, setMenorUm] = useState('none')
    const [maior252, setMaior252] = useState('none')

    useEffect(() => {
        setMenorUm(pokemon.id == 1 ? 'none' : 'flex')
        setMaior252(pokemon.id == 252 ? 'none' : 'flex')
    },[pokemon])

    console.log('Opacity: ' + menorUm)
    console.log('id: ' + pokemon.id)

    return(
        <div className={styles.pokemon_container}>

           <section className={styles.proximo}>
                <div>
                    <Link href={`/pokemon/${pokemon.id == 0 ? null : pokemon.id - 1}`}>
                        <span className={styles.proximo_span} style={{display: menorUm}}>
                            {pokemon.id <= 1 ? null : 'Anterior'}
                        </span>
                    </Link> 
                </div>

                <div>
                    <Link href={`/pokemon/${pokemon.id + 1}`}>
                        <span className={styles.proximo_span} style={{display: maior252}}>
                            {pokemon.id >= 252 ? undefined : 'Proximo '}
                        </span>
                    </Link>
                </div>
            </section>

            <h1 className={styles.title}>{pokemon.name}</h1>

            <div className={styles.div_id}>
                {/* <h3>Número:</h3> */}
                <p>#{pokemon.id}</p>
            </div>

            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width={200} height={200} alt="Pokemon"
            />

            <div>
                {/* <h3>Tipo:</h3> */}
                <div className={styles.types_container}>
                    {pokemon.types.map((item, index) => (
                        <span className={`${styles.type} ${styles['type_' + item.type.name]}`} key={index}>{item.type.name}</span>
                    ))}
                </div>
            </div>

            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h4>Altura</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}