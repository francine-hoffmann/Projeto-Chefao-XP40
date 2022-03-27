const Sequelize = require('sequelize');

const DB_NAME = 'heroku_7c1cde81c68e7fa';
const DB_USER = 'b4cc5078b73d0c';
const DB_PASS = '9e7f98b8';
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'us-cdbr-east-05.cleardb.net',
    port: 3306,
};

let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
}   catch (error) {
    console.error('Erro ao tentar uma conexão com o banco de dados');
}

async function hasConection() {
    try {
      await db.authenticate();
      console.log( 'Banco de dados conectado' );
    } catch (error) {
      console.error( 'Não conectado ao banco de dados' );
    }
}

Object.assign(db, {
    hasConection,
});

module.exports = db;