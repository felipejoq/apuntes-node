// const makeBuildPerson = () => {
//     return () => {
//         return {

//         }
//     }
// }

// const { getAge, getUUID } = require('../plugins');

const buildMakePerson = ({getAge, getUUID}) => {
    return ({ name, born_date }) => {
        return {
            id: getUUID(),
            name,
            born_date,
            age: getAge({ born_date }),
        }
    }
}

module.exports = {
    buildMakePerson,
}

// const person = {
//     name: 'Felipe',
//     born_date: '1988-12-06'
// }

// const felipe = buildPerson(person);

// console.log(felipe);
