const {buildMakePerson} = require('./helpers/factory-patter.js');
const { getAge, getUUID } = require('./plugins');
const makePerson = buildMakePerson({getAge, getUUID});

const person = {
    name: 'Felipe',
    born_date: '1988-12-06'
}

const felipe = makePerson(person);

console.log(felipe);

