const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'turnos'
});


connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL!');
  });

//   connection.query('SELECT * FROM  personas', function (err, results, fields) {
//     if (err) throw err;
//     console.log(results);
    
    
    
//   });
const data = {
    nombre: 'Juana',
    apellido: 'Lizano',
    fecha: '20-03-02'
  };
  
  connection.query('INSERT INTO personas SET ?', data, (error, results, fields) => {
    if (error) throw error;
    console.log('Datos insertados correctamente');
  });

//   const hola = "hola";

//   console.log(hola);