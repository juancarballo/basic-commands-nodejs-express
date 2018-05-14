# learning-nodejs-express

* **Debemos instalar NodeJS en nuestra computadora**

* **Luego abrimos nuestro editor de código y nos ubicamos en la carpeta donde empezaremos nuestro proyecto**

* **Npm init --yes : crea el paquete.json donde se encontrará los parámetros de nuestro proyecto (Este comando nos permite saltar el ingreseso de los datos como version, name o description manualmente y los asigna automáticamente, por otra parte podemos modificarlos luego sin ningún apuro).**

* **Ahora creamos un archivo index.js dentro de nuestro proyecto con el siguiente código:**
```
const http = require('http');//creando el servidor
http.createServer((req, res) => {
res.end('Hello world');//mensaje de salida si el servidor conectó
}).listen(3000);//escuchando en el puerto 3000
```
*Con esto crearíamos un servidor muy sencillo que correría en el localhots de nuestro navegador.*

* **Npm install --global express: permite instalar un módulo express el cual reducirá el código anterior y es uno de los módulos más utilizados. Al instalar express modificariamos el código de la siguiente forma:**
```	
const express = require('express');//creando el servidor
const app = express ();//copiamos el servidor en la variable app
app.listen(3000);//escuchando desde el servidor 3000

//capturando la respuesta del servidor con una funcion JS ES6
app.get('/', (req,res) => {//cuando mi navegador devuelva la ruta '/'
res.end('Hello world');//como respuesta enviamos el mensaje 'Hello world'
})
```
* **Para ejecutar el servidor comúnmente solo escribiríamos node index.js sin embargo para ahorrarnos esto podemos crear un script que minimice o modifique el comando que debemos ingresar para iniciar nuestro servidor. Por ejemplo quiero que mi servidor se ejecute cuando yo le ingrese npm start, entonces vamos a nuestro archivo package.json y en los scripts agregamos la siguiente linea:**
```
"start": "node index.js"
```

*Si después de un script sigue otro debemos separarlos con una coma*

* **Luego para terminar  nuestro código quedaría algo así**
```
const express = require('express');//creando el servidor
const app = express();
app.listen(3000)
app.get('/', (req, res) => {//cuando mi navegador devuelva la ruta '/'
res.end('Hello world');//como respuesta enviamos el mensaje 'Hello world'
console.log('Servidor funcionando');
})
```

* **Notas:**
```
Si tenemos problemas al ingresar comando seguramente estemos equivocándonos al diferenciar cuando usar node y npm
```

