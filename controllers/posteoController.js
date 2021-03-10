module.exports = {
    guardaUnPosteo: async (posteo) => {
        let posteoNuevo = posteoService.guardaUnPosteo(posteo);
        return posteoNuevo;
    },

    listarEstados: async () => {
        let listado = await posteoService.listarPosteos();

        return listado;
    },

    traerUnPosteo: async id => {
        let posteo = await posteoService.traerUnPosteo(id);

        return posteo;
    },

    modificarPosteo: async (id, texto) => {
        let posteo = null;

        let resultado = await posteoService.modificarPosteo(id, texto);

        if (resultado) {
            posteo = await posteo.posteoService.traerUnPosteo(id);
        }

        return posteo;
    },
}