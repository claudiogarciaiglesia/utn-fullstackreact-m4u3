const { traerUnPosteo } = require('../controllers/posteo_animoController');
const posteoModel = require('../models/posteo_animo');

module.exports = {
    guardarUnPosteo: async posteo => {
        let id = await posteoModel.guardarUnPosteo(posteo);
        posteo.id = id;
        console.log('id que traigo de model: ', id);
        console.log('id que le pongo al posteo ', posteo.id);
        return posteo;
    },

    listaPosteos: async () => {
        let listaPosteos = await posteoModel.traerTodosLasPosteos();
        return listaDePosteos;
    },

    traerUnPosteo: async (id) => {
        let posteo = await posteoModel.traerUnPosteo(id);
        return posteo;
    },

    modificarPosteo: async (id, mail, edad) => {
        let resultado = await posteoModel.modificarPosteo(id, edad, mail);

        if (resultado == 1) {
            return true;
        } else {
            return false;
        }
    }
}