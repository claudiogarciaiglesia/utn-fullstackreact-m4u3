const { traerUnaPersona } = require('../controllers/personaController');
const personaModel = require('../models/persona');

module.exports = {
    guardarUnaPersona: async persona => {
        let id = await personaModel.guardarUnaPersona(persona);
        persona.id = id;
        console.log('id que traigo de model: ', id);
        console.log('id que le pongo a la persona ', persona.id);
        return persona;
    },

    listaPersonas: async () => {
        let listaPersonas = await personaModel.traerTodasLasPersonas();
        return listaDePersonas;
    },

    traerUnaPersona: async (id) => {
        let persona = await personaModel.traerUnaPersona(id);
        return persona;
    },

    modificarPersona: async (id, mail, edad) => {
        let resultado = await personaModel.modificarPersona(id, edad, mail);

        if (resultado == 1) {
            return true;
        } else {
            return false;
        }
    }
}