const mysql = require('mysql');
const settings = require('./settings.json');
const util = require('util');
let db;

const connectDatabase = () => {
    db = mysql.createConnection(settings);

    db.connect((err) => {
        if (!err) {
            console.log('Ya estas conectado a la base de datos!');
        } else {
            console.log('Error conectando con la base de datos');
        }
    });
    db.query = util.promisify(db.query);
    return db;
}