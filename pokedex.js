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
    let typeText;
    for (let i = 0; i < pokemonObject.type.length; i++) {

        if (i === 0) {
            typeText = `Tipo: ${pokemonObject.type[i]}`;

        } else if (0 < i < (pokemonObject.type.length - 1)) {
            typeText += `, ${pokemonObject.type[i]}`;

        } else if (i => (pokemonObject.type.length - 1)) {
            typeText = `${typeText} y ${pokemonObject.type[i]}`;

        }
    }

    let pokeType = document.createTextNode(typeText);
    type.appendChild(pokeType);
    listItem.appendChild(type);


}

async function collectPokemon(numOfPokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numOfPokemon}/`);
        const dataPokemon = await response.json();


        const arrayDataPokemon = [dataPokemon];


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

        doomPokedex(pokemon[0]);
        return pokemon[0];
    } catch (error) {
        alert = error.name;
    }
}


for (let i = 0; i <= 150; i++) {
    collectPokemon(i);
}