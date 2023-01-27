import CardCategoria from "@/components/CardCategoria";
import { tipo } from "../tipoPokemon";

export const  getStaticPaths = async () => {

    const api = 'https://pokeapi.co/api/v2/pokemon?limit=252';

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

export const getStaticProps = async (context) => {

    const id = context.params.categoriaPk

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()

    return{props: {pokemon: data}}
}

export default function categoriaPk({pokemon}){

    const types = tipo.map(tipo => <p>{tipo.name}</p>)

    return(
        <>
            <h1>Tipo Tal</h1>
                <div>
                    {/* {types.filter((item, index) => (
                        <CardCategoria key={index} pokemon={pokemon} />
                    ))} */}
                </div>
        </>
    )
}