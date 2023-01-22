import { useRouter } from "next/router"

export const  getStaticPaths = async () => {
    const maxPokemons = 251;
    const api = 'https://pokeapi.co/api/v2/pokemon/';

    const res = await fetch(`${api}`)
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
    
    const router = useRouter();
    const PokemonId = router.query.PokemonId
    
    return(
        <>
            <h1>{pokemon.name}</h1>
        </>
    )
}