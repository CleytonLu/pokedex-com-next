import CardCategoria from "@/components/CardCategoria";
import { useEffect } from "react";
import Home from '../index'

// API Type
export const  getStaticPaths = async () => {

    const api = 'https://pokeapi.co/api/v2/type/';

    // Type
    const res = await fetch(`${api}`)
    const data = await res.json()



    //  params e criação de id para a API
    const paths = data.results.map((pokemon, index)=> {
        return {
            params : {categoriaPk: (index+1).toString()}
        }
    })

    return{paths: paths, fallback: false}
}

// API Type


export async function getStaticProps(context){

    const id = context.params.categoriaPk

    const res = await fetch(`https://pokeapi.co/api/v2/type/${id}`)
    const data = await res.json()

    const resPoke = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=252`)
    const dataPoke = await resPoke.json()

    dataPoke.results.forEach((item, index) => {
        item.id = index + 1
    });

    return{props: {tipos: data, pokemons: dataPoke.results}}
}

// Página
export default function categoriaPk({tipos, pokemons}){

    console.log(tipos)

    

    return(
        <>
            <h1>Pokemons {tipos.name}</h1>

            {pokemons.map(pokemon => (
                <h1 key={pokemon.id}>{pokemon.name} {pokemon.id}</h1>
            ))}
                
        </>
    )
}