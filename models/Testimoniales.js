//Es el modelo para consultar a la tabla de testimoniales en el db agenciaViajes de mysql

import { Sequelize } from "sequelize";
import db from "../config/db.js"; //aca llamamos a db que tiene en su configuracion conectarse con agenciaViajes

export const Testimoniales = db.define("testimoniales", { //aca pasamos como parametro 'viajes' que es el nombre de la tabla que tiene la db agenciaViajes
    //Definimos las columnas de la tabla 'por eso el .define' con los tipos de dato de cada columna.
    nombre: {
        type: Sequelize.STRING
    },
    correo:{
        type: Sequelize.STRING
    },
    mensaje:{
        type: Sequelize.STRING
    }
});
