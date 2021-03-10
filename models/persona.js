const conexion = require('../db');

module.exports = {
    guardarUnaPersona: async (persona) => {
        let result = await conexion.query(
            'INSERT INTO persona (nombre, apellido, nickname, edad, email) VALUES (?, ?, ?, ?, ?)',
            [persona.nombre, persona.apellido, persona.nickname, persona.edad, persona.email]);
        return result.insertId;
    },

    traerUnaPersona: async (id) => {
        let unaPersona = await conexion.query(
            'SELECT * FROM persona WHERE id = ?', [id]);
        return unaPersona[0];
    },

    traerTodasLasPersonas: async () => {
        let listadoPersonas = await conexion.query('SELECT * FROM persona');
        return listadoPersonas;
    },

    modificarPersona: async (id, edad, email) => {
        let result = await conexion.query(
            'UPDATE persona SET edad = ?, email = ?, WHERE id = ?', [edad, email, id]);
        return result.changedRows;
    },

    borrarPersona: async (id) => {
        let fecha = new Date();
        let result = await conexion.query('UPDATE persona SET deleted = ?, date_deleted = ?, WHERE id = ?', [1, fecha, id]);
    }
}
