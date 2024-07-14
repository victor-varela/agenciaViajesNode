//Controlador que se va a encargar de que informacion se va a mostrar y que vista es la que se va a cargar
//El controlador consulta al modelo a traves de los metodos del orm y el resultado de las consultas lo enviamos a las vistas. En la vista se iteran y se muestran.

import {Viaje} from "../models/Viaje.js"; // aca importamos el MODELO: los datos- la DB
import { Testimoniales } from "../models/Testimoniales.js"; //importamos el modelo de Testimonales

//esta varibale es un controlador- aca esta diciendo: cuando me llamen voy a .render: ---- le pasa los datos a la vista

const paginaInicio = async (req, res) => {
  //Consulta la db por 3 viajes para mostrar-- por eso async y try catch- Cuando hay que hacer varias consultas a la DB se debe usar el promise.All() esto evita que se bloqueen las ejecuciones del codigo

  const promiseDB = []; // la explicacion esta en clase 435
  promiseDB.push( Viaje.findAll( { limit: 3 } ));
  promiseDB.push( Testimoniales.findAll({limit:3}))
  
  try {
    //req es la peticion : res es lo que express nos manda
    
    const resultado = await Promise.all(promiseDB);

    res.render("inicio", {
      //pasamos pagina como variable
      pagina: "Inicio",
      clase: 'home',
      viajes: resultado[0], //pasamos la variable que trae la consulta a la db para mostrar render en la vista inicio
      testimonios: resultado[1] 
    });
    
  } catch (error) {
    console.log(error);
  }

};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
  };

const paginaViajes = async (req, res) => {

    //Antes de mostrar los viajes debemos buscarlo en la db: Aqui entra en accion el ORM sequelize que traduce las consulta a la db de forma mas sencilla, es un intermediario entre la db y nuestra app- EL modelo 'Viaje' esta definido .define- Lo instanciamos aca y accedemos al metodo findAll() que es la utilidad de squelize, sin ello tendriamos que escribir la consulta nosotros mismos

  const viajes = await Viaje.findAll()
  console.log(viajes);
  res.render("viajes", {
    pagina: "Proximos Viajes",
    viajes //pasamos viajes como variable con object literal enhasment (el key y value tienen el mismo nombre 'viajes')
  });
};

const paginaTestimoniales = async (req, res) => {
  //este metodo muestra la pagina testimoniales con los testimonios provenientes de la db- por lo que debemos consultarla, similar a cuando consultamos para buscar la info de un viaje en el metodo anterior- por ello el async await y try catch-

  try {
    const testimonios= await Testimoniales.findAll();
    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimonios
    });
    
  } catch (error) {
    console.log(error);
  }
};

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res)=>{
  const {slug} = req.params;

  try {
    const viaje = await Viaje.findOne( { where: {slug} } )
    res.render('viaje',{
      pagina:'Informacion Viaje',
      viaje
    })
  } catch (error) {
    console.log(error);
  }
}

export { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalleViaje };
