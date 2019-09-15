const express = require('express');
const server = express();

server.use(express.json()); // Dizer ao express para ler json no corpo da requisição.

const users = ['Alberto', 'André', 'Cláudio', 'Leandro', 'Ricardo'];


// Route params = /users/1
// Query params = ?teste=1
// Request body = { "name": "Beto", "email": "alberto2611@gmail.com" }

// CRUD - Create, Read, Update, Delete


server.use((request, response, next) => {
    // Middleware global
    console.time('Request')
    console.log(`Método: ${request.method}; URL: ${request.url}`);

    next();

    console.timeEnd('Request');
});

function nameIsRequired(request, response, next) {
    // Middleware local
    if (!request.body.name) {
        return response.status(400).json({
            error: 'User name is required'
        })
    }
    return next();
}

function checkUserInArray(request, response, next) {
    // Middleware local
    const user = users[request.params.index]
    if (!user) {
        return response.status(400).json({
            error: 'User does not exists'
        });
    }
    request.user = user; // adicionando a variável user dentro de request
    return next();
}

server.get('/users', (request, response) => {
    return response.json(users);
});

server.get('/users/:index', checkUserInArray, (request, response) => {
    /* const {
        index
    } = request.params;
    return response.json(users[index]); */
    return response.json(request.user);
})

server.post('/users', nameIsRequired, (request, response) => {
    const {
        name
    } = request.body;
    users.push(name);
    return response.json(users);
});

server.put('/users/:index', nameIsRequired, checkUserInArray, (request, response) => {
    const {
        index
    } = request.params;
    const {
        name
    } = request.body;

    users[index] = name;
    return response.json(users);

});

server.delete('/users/:index', checkUserInArray, (request, response) => {
    const {
        index
    } = request.params;

    users.splice(index, 1);
    return response.send();
});


server.get('/users', (request, response) => {
    const name = request.query.name;
    return response.json({
        message: `Hello ${name}`,
    });
})


server.listen(3000);