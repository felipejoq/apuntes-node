const getPokemonById = require('./helpers/promises.js');
const { buildLogger } = require('./plugins');
const logger = buildLogger({service: 'index4.js'});

(async () => {
    const pokemon = await getPokemonById({ id: 1 });
    console.log({ pokemon });
    logger.log({message: 'Hello world!'});
    logger.error({message: 'Mensaje del error'});
})();