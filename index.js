


const express = require('express');//creando el servidor
const app = express();
app.listen(3000)

app.get('/', (req, res) => {//cuando mi navegador devuelva la ruta '/'
  res.end('Hello world');//como respuesta enviamos el mensaje 'Hello world'
   console.log('Servidor funcionando');
})

