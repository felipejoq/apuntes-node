const getAgePlugin = require('get-age');

const getAge = ({ born_date }) => {
    if (!born_date)
        throw new Error('Error, incluya la fecha de nacimiento.');

    return getAgePlugin(born_date);
}

module.exports = {
    getAge
}