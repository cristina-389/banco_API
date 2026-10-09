const mysql = require('mysql2');

const conn = mysql.creatConnction({
    host:'localhost',
    user: 'root',
    password:'',
    database:'banco_db'
});
module.exports = conn;