import mysql from "mysql"

let connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Password!",
    database:"test",
  });

  connection.connect((err) => {
    if (err) return console.error(err.message);
  
    console.log('Connected to the MySQL server.');
  });