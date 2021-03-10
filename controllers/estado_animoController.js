module.exports = {
    guardaUnEstado: async (estado) => {
        let estadoNuevo = estadoService.guardaUnEstado(estado);
        return estadoNuevo;
    },

    listarEstados: async () => {
        let listado = await estadoService.listarEstados();

        return listado;
    },

    traerUnEstado: async id => {
        let estado = await estadoService.traerUnEstado(id);

        return estado;
    },

    modificarEstado: async (id, texto) => {
        let estado = null;

        let resultado = await estadoService.modificarEstado(id, texto);

        if (resultado) {
            estado = await estado.estadoService.traerUnEstado(id);
        }

        return estado;
    },
}