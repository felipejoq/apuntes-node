const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" }
]
// Un callback es una función que se ejecuta dependiendo del resultado.
// se recibe como argumento dentro de una función y dependiendo lo que suceda
// se ejecuta de una u de otra forma.
const getUserById = ({ id }, callback) => {
    const user = users.find((user) => user.id === id);
    user
        ? callback(null, user)
        : callback(`user not found, id: ${id}`);
}

module.exports = {
    getUserById
}