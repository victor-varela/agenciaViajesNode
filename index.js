//Configurar Express: es el archivo principal

//Sintaxis common Js:

// const express = require("express"); 
import express from "express"; //sintaxis con modules 
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express(); //instaciamos express mediante la variable app

//Conectar DB
db.authenticate()
  .then( ()=> console.log('Base de datos conectada') )
  .catch(error => console.log(error))

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar Pug (template engine para mostar las vistas)
app.set('view engine', 'pug');

//Obtener Año actual - Titulo de Paginas
app.use( (req, res, next)=>{
  const year = new Date();
  res.locals.actualYear = year.getFullYear(); //pasamos actualYear y title como varibale reescribiendo en el obj locals
  res.locals.title = 'Agencia de Viajes'
  next();
} )

//Agregar body parser para enviar datos al formulario
app.use(express.urlencoded({extended:true}));

//Definir carpeta publica
app.use(express.static('public'));//aca le decimos a express donde estan los archivos staticos y los busca solo:img-css

//Agregar Router
app.use('/', router);//aca llama al router y luego el router llama al controller y luego el controller llama a la vista. MVC

app.listen(port, () => {
  console.log(
    `El servidor esta funcionando correctamente en el puerto ${port}`
  );
});
