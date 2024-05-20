function doomPokedex(pokemonObject) {
    //seleccionamos la lista
    let pokedexOl = document.querySelector(`#pokedex`);
    //creamos el elemento de lista
    let listItem = document.createElement('li');
    listItem.id = pokemonObject.id;
    pokedexOl.appendChild(listItem);

    //Creamos el comtenedor de las imagen
    let bloqueImg = document.createElement("figure");
    //creamos la imagen
    let img = document.createElement("img");
    //le añadimos atributos
    img.src = pokemonObject.image;
    img.alt = pokemonObject.name;
    //añadimos la imagen al contenedor
    bloqueImg.appendChild(img);
    //crear la leyenda de la image
    let caption = document.createElement('figcaption');
    //le añadimos contenido
    let captionText = document.createTextNode(`${pokemonObject.name}`);
    //añadimos el nodo de texto a la descripcion
    caption.appendChild(captionText);
    //lo añadimos al contenedor imagen
    bloqueImg.appendChild(caption);
    //añadimos el contenedor figure
    listItem.appendChild(bloqueImg);

    //añadimos el tipo de pokemonObject 
    let type = document.createElement('p');
    let pokeType = document.createTextNode(`Tipo: ${pokemonObject.type[0]} y ${pokemonObject.type[1]}`);
    type.appendChild(pokeType);
    listItem.appendChild(type);
}

async function collectPokemon(numOfPokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numOfPokemon}/`);
        const dataPokemon = await response.json();

        //console.log(dataPokemon);
        const arrayDataPokemon = [dataPokemon];
        //console.log(arrayDataPokemon);

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
        //console.log(pokemon[0]);
        doomPokedex(pokemon[0]);
        return pokemon[0];
    } catch (error) {
    }
}

collectPokemon(4);