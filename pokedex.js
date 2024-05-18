
let pokedexOl = document.querySelector(`#pokedex`);

async function collectPokemon(numOfPokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numOfPokemon}/`);
        const dataPokemon = await response.json();

        console.log(dataPokemon);
        const arrayDataPokemon = [dataPokemon];
        console.log(arrayDataPokemon);

        const pokemon = arrayDataPokemon.map((result) => {
            return {
                name: result.name,
                image: result.sprites.front_default,
                id: result.id,
                type: result.types.map((type) => {
                    return type.type.name
                }),
            }
        })
        console.log(pokemon);
    } catch (error) {
    }
}

collectPokemon(1);
