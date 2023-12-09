const { getUserById } = require('./helpers/callbacks.js');

const userId = 2;
getUserById({ id: userId }, (error, user) => {
    if (error) throw new Error(error);
    console.log({ user });
});

