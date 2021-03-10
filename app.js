const express = require('express');
var app = express();
const personaController = require('./controllers/personaController');
const estado_animoController = require('./controllers/estado_animoController');
const posteoController = require('./controllers/posteoController');

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

app.post('/estado', async (req, res) => {
    try {
        const { texto } = req.body;
        if (!texto) {
            throw 'Error en los parametros requeridos';
        }

        let estado = {
            texto: texto
        }

        let estadoNuevo = await estado_animoController.guardaUnEstado(estado);

        res.send(`El estado se creo satisfactoriamente, su id asignado es ${estadoNuevo.id}`);

    } catch (error) {
        console.log('Se produjo el siguiente error: ', error);
        res.sendStatus(422).send('Se produjo el siguiente error: ', error);
    }
})

app.post('/posteo', async (req, res) => {
    try {
        const { texto } = req.body;
        if (!texto) {
            throw 'Error en los parametros requeridos';
        }

        let posteo = {
            texto: texto
        }

        let posteoNuevo = await posteoController.guardaUnPosteo(posteo);

        res.send(`El posteo se creo satisfactoriamente, su id asignado es ${posteoNuevo.id}`);

    } catch (error) {
        console.log('Se produjo el siguiente error: ', error);
        res.sendStatus(422).send('Se produjo el siguiente error: ', error);
    }
})