const express = require('express');

const app = express();

app.use(express.json())

const usuarios = [];

app.post('/user', (request, response) => {
    const { name, username, id } = request.body;

    usuarios.push({
        name,
        username,
        id
    })

    return response.status(201).json(usuarios);
});

app.listen(3333, console.log('Servidor Rodando!!! Fla!'));