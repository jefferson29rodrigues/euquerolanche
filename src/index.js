const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json())

const usuarios = [];

app.post('/user', (request, response) => {
    const { name, username, id } = request.body;

    usuarios.push({
        name,
        username,
        uuid: uuidv4(),
        created_at: new Date()
    })

    return response.status(201).json(usuarios);
});

const todos = [];

app.post('/todo', (request, response) => {
    const { title, deadline } = request.body;

    todos.push({
        title,
        deadline,
        check: false,
        uuid: uuidv4(),
        created_at: new Date()
    });

    return response.status(201).json(todos);
})

app.listen(3333, console.log('Servidor Rodando!!! Fla!'));