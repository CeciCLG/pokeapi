
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

function doomPokedex(pokemonObject) {
    //seleccionamos la lista
    let pokedexOl = document.querySelector(`#pokedex`);
    //creamos el elemento de lista
    let listItem = document.createElement('li');

    //Creamos el comtenedor de las imagen
    let bloqueImg = document.createElement("figure");
    //creamos la imagen
    let img = document.createElement("img");
    //le añadimos atributos
    img = element.setAttribute('src', pokemon.image);
    img = element.setAttribute('alt', pokemon.name);
    //añadimos la imagen al contenedor
    bloqueImg.appendChild(img);
    //crear la leyenda de la image
    let caption = document.createElement('figcaption');
    //le añadimos contenido
    let captionText = document.createTextNode(`${pokemon.name}`)
    //añadimos el nodo de texto a la descripcion
    caption.appendChild(captionText);
    //lo añadimos al contenedor imagen
    bloqueImg.appendChild(caption);
    //añadimos el contenedor figure
    listItem.appendChild(bloqueImg);

    //añadimos el tipo de pokemon 
    let Type1 = document.createElement('p');
    let pokeType = document.createTextNode(`Tipo: ${pokemon.type[0]} y ${pokemon.type[1]}`);
}