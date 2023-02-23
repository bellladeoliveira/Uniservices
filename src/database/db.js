const mysql = require('mysql');
const server = require('../server');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
   // port: '3307', 
    password: '',
    database: 'uniservice'
})

connection.connect((error)=> {
    if(error){
        console.log(error)
    } else {
        console.log('Conectado ao Banco de Dados com sucesso!')
    }
})

module.exports = connection;