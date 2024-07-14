//Controlador del envio y validacion del formulario

import { Testimoniales } from "../models/Testimoniales.js";

const guardarTestimonio =  async (req, res)=>{
    //Validar el formulario
    const {nombre, correo, mensaje} = req.body;
    let errores=[];

    if(nombre.trim()===''){
      errores = [...errores, {mensaje:'el nombre esta vacio'}]
    }
    if(correo.trim()===''){
       errores.push({mensaje: 'el correo esta vacio'});
    }
    if(mensaje.trim()===''){
        errores.push({mensaje:'el mensaje esta vacio'});
    }

    if(errores.length > 0){
        //Consultar testimoniales existentes
        const testimonios= await Testimoniales.findAll();
        
        //Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            mensaje,
            correo,
            testimonios
        })
    }else{
        //Almacenarlo en la db
        
        try {
            await Testimoniales.create({
                nombre,
                correo,
                mensaje
            })
        
        res.redirect('testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
};

export {guardarTestimonio}