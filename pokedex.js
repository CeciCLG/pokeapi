function doomPokedex(pokemonObject) {
    //seleccionamos la lista
    let pokedexOl = document.querySelector(`#pokedex`);

    //creamos el elemento de lista
    let listItem = document.createElement('li');
    listItem.id = pokemonObject.id;
    listItem.className = "card";
    pokedexOl.appendChild(listItem);

    //Creamos el comtenedor de las imagen
    let bloqueImg = document.createElement("figure");
    let img = document.createElement("img");
    img.src = pokemonObject.image;
    img.alt = pokemonObject.name;
    img.className = "card-image";

    //añadimos la imagen al contenedor
    bloqueImg.appendChild(img);

    //crear la leyenda de la image (el nombre del pokemon)
    let caption = document.createElement('figcaption');
    caption.className = "card-title";
    let captionText = document.createTextNode(`${pokemonObject.name}`);
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
    pokeType.className = "card-subtitle";
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