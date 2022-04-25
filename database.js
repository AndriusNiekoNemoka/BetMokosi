const mysql2 = require('mysql2');

    module.exports = mysql2.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: 'valtys'
    });
    
    