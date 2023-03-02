const express = require('express');
const app = express();

// const router = express.Router();
app.use(express.static('public')); // definimos la carpeta donde contenga archivos estaticos como imagenes , videos y algunos js . 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // parsea la informacion enviada desde el metodo post para que js pueda leer el codigo

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'turnos'
});


 

connection.connect((error) => {
    if (error) {
      console.error('Error al conectarse a la base de datos:', error);
    } else {
      console.log('Conexión exitosa a la base de datos.');
    }
  });

  
  
  

app.post('/insertar', (req, res) => {
    // Aquí es donde manejarás la solicitud POST de tu formulario
    // Puedes acceder a los datos enviados desde el formulario en el objeto `req.body`
    // y luego hacer una solicitud de inserción a tu base de datos utilizando un paquete de acceso a la base de datos como "mysql"
  
    // Aquí hay un ejemplo de cómo podrías hacer una inserción en una base de datos MySQL:
    const name = req.body.name;
    const lastName = req.body['last-name'];
    const time = req.body.time;
    const hour = req.body.hour;
    const query = `INSERT INTO personas (nombre, apellido, fecha,hora) VALUES ('${name}', '${lastName}', '${time}' , '${hour}')`;
    
    connection.query(query, (error, results, fields) => {
      if (error) throw error;
      res.send('Inserción exitosa');
    });
  });




app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html'); // __dirname significa la carpeta en donde estamos parados
  });
  

  
  
  // app.get('/data', (req, res) => {
  //   const data = {
  //     foo: 'bar',
  //     baz: 42
  //   };
  //   res.json(data);
  // });
  
  app.get('/data', function(req, res) {
    // Realizar la consulta a la base de datos
    connection.query('SELECT fecha FROM personas', function(error, results, fields) {
      if (error) throw error;
  
      // Enviar los resultados de la consulta como respuesta a la solicitud
      res.send(results);
      console.log(results)
    });
  });
  

app.listen(3000, function () {
  console.log('Aplicación iniciada en http://localhost:3000');
});


//  module.exports = router;