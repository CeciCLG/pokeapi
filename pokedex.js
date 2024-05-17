const pokedexOl = document.querySelector(`#pokedex`);

async function collectPokemon(numOfPokemon) {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data1 = await response.json();
        console.log(data1);
        const linkUrl = data1.results[numOfPokemon].url;
        console.log(linkUrl);
        const responseUrl = await fetch(linkUrl);
        const data2 = await responseUrl.json();
        console.log(data2);
    } catch (error) {
        console.log(error);
    }
}

collectPokemon(0);