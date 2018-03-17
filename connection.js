const mysql      = require('mysql');


// Relational Database

// Establish a Connection
    // host
    // user
    // password
    // database


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root1',
  password : '',
  database : 'top_songsDB'
});
 
connection.connect();


module.exports = connection;