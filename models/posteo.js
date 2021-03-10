const conexion = require('../db');

module.exports = {
    guardarUnPosteo: async (posteo) => {
        let result = await conexion.query(
            'INSERT INTO posteo (texto) VALUES (?)',
            [posteo.texto]);
        return result.insertId;
    },

    traerUnPosteo: async (id) => {
        let unPosteo = await conexion.query(
            'SELECT * FROM posteo WHERE id = ?', [id]);
        return unPosteo[0];
    },

    traerTodosLosPosteos: async () => {
        let listadoPosteos = await conexion.query('SELECT * FROM posteo');
        return listadoPosteos;
    },

    modificarPosteo: async (id, texto) => {
        let result = await conexion.query(
            'UPDATE posteo SET texto = ?, WHERE id = ?', [texto, id]);
        return result.changedRows;
    },

    borrarPosteo: async (id) => {
        let fecha = new Date();
        let result = await conexion.query('UPDATE posteo SET deleted = ?, date_deleted = ?, WHERE id = ?', [1, fecha, id]);
    }
}
