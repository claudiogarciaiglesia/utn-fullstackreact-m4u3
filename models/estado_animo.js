const conexion = require('../db');

module.exports = {
    guardarUnEstado: async (estado) => {
        let result = await conexion.query(
            'INSERT INTO estado_animo (texto) VALUES (?)',
            [estado.texto]);
        return result.insertId;
    },

    traerUnEstado: async (id) => {
        let unEstado = await conexion.query(
            'SELECT * FROM estado_animo WHERE id = ?', [id]);
        return unEstado[0];
    },

    traerTodosLosEstados: async () => {
        let listadoEstados = await conexion.query('SELECT * FROM estado_animo');
        return listadoEstados;
    },

    modificarEstado: async (id, texto) => {
        let result = await conexion.query(
            'UPDATE estado_animo SET texto = ?, WHERE id = ?', [texto, id]);
        return result.changedRows;
    },

    borrarEstado: async (id) => {
        let fecha = new Date();
        let result = await conexion.query('UPDATE estado_animo SET deleted = ?, date_deleted = ?, WHERE id = ?', [1, fecha, id]);
    }
}
