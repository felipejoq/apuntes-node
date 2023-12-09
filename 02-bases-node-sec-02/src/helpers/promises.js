const { http } = require('../plugins')


const getPokemonById = async ({ id }) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    // const response = await fetch(url);
    // const pokemon = await response.json();
    const pokemon = await http.get({url});
    return pokemon.name;
  } catch (error) {
    throw new Error('Pokemon no existe!');
  }
}

module.exports = getPokemonById;