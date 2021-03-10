const { traerUnEstado } = require('../controllers/estado_animoController');
const estadoModel = require('../models/estado_animo');

module.exports = {
    guardarUnEstado: async estado => {
        let id = await estadoModel.guardarUnEstado(estado);
        estado.id = id;
        console.log('id que traigo de model: ', id);
        console.log('id que le pongo al estado ', estado.id);
        return estado;
    },

    listaEstados: async () => {
        let listaEstados = await estadoModel.traerTodosLasEstados();
        return listaDeEstados;
    },

    traerUnEstado: async (id) => {
        let estado = await estadoModel.traerUnEstado(id);
        return estado;
    },

    modificarEstado: async (id, mail, edad) => {
        let resultado = await estadoModel.modificarEstado(id, edad, mail);

        if (resultado == 1) {
            return true;
        } else {
            return false;
        }
    }
}