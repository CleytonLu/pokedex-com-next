import styles from '../styles/PageCategoria.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=252')
    const data = await res.json()

    data.results.forEach((item, index) => {
        item.id = index + 1
    });

    return{props: {
        pokemons: data.results
    }}
}

export default function PageCategoria(pokemons){

    console.log(pokemons)

    return(
        <div>
            {pokemons.map(pokemon => (
                <h1 key={pokemon.id} >{pokemon.name}</h1>
            ))}
        </div>
    )
}