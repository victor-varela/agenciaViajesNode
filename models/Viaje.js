//Es el modelo para consultar a la tabla de viajes en el db agenciaViajes de mysql

import { Sequelize } from "sequelize";
import db from "../config/db.js"; //aca llamamos a db que tiene en su configuracion conectarse con agenciaViajes

export const Viaje = db.define("viajes", { //aca pasamos como parametro 'viajes' que es el nombre de la tabla que tiene la db agenciaViajes
    //Definimos las columnas de la tabla 'por eso el .define' con los tipos de dato de cada columna.
    titulo: {
        type: Sequelize.STRING
    },
    precio:{
        type: Sequelize.STRING
    },
    fecha_ida:{
        type: Sequelize.DATE
    },
    fecha_vuelta:{
        type: Sequelize.DATE
    },
    imagen:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    },
    disponibles:{
        type: Sequelize.STRING
    },
    slug:{
        type: Sequelize.STRING
    },

});
