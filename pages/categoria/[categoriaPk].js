import Card from "@/components/Card";
import styles from '../../styles/CategoriaPk.module.css'
import { pokemon } from "../pokemon/[pokemonId]";

export const  getStaticPaths = async () => {

    const res = await fetch('https://pokeapi.co/api/v2/type/')
    const data = await res.json()

    
    //  params e criação de id para a API
    const paths = data.results.map((pokemon, index)=> {
        return {
            params : {categoriaPk: (index+1).toString()}
        }
    })

    return{paths: paths, fallback: false}
}


export async function getStaticProps(context){

    const id = context.params.categoriaPk

    const res = await fetch(`https://pokeapi.co/api/v2/type/${id}`)
    const data = await res.json()

    const resPoke = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=252`)
    const dataPoke = await resPoke.json()

    dataPoke.results.forEach((item, index) => {
        item.id = index + 1;
    });

    return{props: {tipo: data, pokemons: dataPoke.results}}
}


// Página
export default function categoriaPk({tipo, pokemons}){
    
    const defType = tipo.name

    const filtedType = pokemons.filter(pokemon => pokemon.url.types == defType)

    console.log(filtedType)

    return(
        <div className={`${styles.categoriaPk_content} ${styles['type_' + tipo.name]}`}>
            <h1>Pokemons {defType}</h1>

            <div className={styles.pokemon_container}>

                {pokemons.map(pokemon => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>

        </div>
    )
}