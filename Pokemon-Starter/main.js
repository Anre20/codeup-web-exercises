import {getPokemon} from "./pokemon-api.js";

const getPokemonAll = async (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    try {
        const response = await fetch(url, options);
        const list = await response.json();
        const pokemon = await Promise.all(list.results.map((item) => getPokemon(item.name)));
        list.results = pokemon;
        return list;
    }   catch (error) {
        return error;
    }
    };

//MAIN
(() => {
    getPokemonAll().then((list) => {
        console.log(list);

    });
})();