const getPokemonById = require('./helpers/promises.js');

(async () => {
    const name = await getPokemonById({ id: 1 });
    console.log(name);
})();