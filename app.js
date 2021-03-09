const express = require('express');
var app = express();
personaController = require('./controllers/personaController');

app.use(express.urlencoded());

app.post('/persona', async (req, res) => {
    try {
        const { nombre, apellido, nickname, edad, email } = req.body;
        if (!nombre || apellido || nickname || edad || email) {
            throw 'Error en los parametros requeridos';
        }

        let persona = {
            nombre: nombre,
            apellido: apellido,
            nickname: nickname,
            edad: edad,
            email: email
        }

        let personaNueva = await personaController.guardarUnaPersona(persona);

        res.send(`La persona se creo satisfactoriamente, su id asignado es ${personaNueva.id}`);

    } catch (error) {
        console.log('Se produjo el siguiente error: ', error);
        res.sendStatus(422).send('Se produjo el siguiente error: ', error);
    }
})