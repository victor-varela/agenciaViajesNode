import Sequelize from 'sequelize';
import dotenv from 'dotenv'

dotenv.config();//este metodo permite el acceso al valor de las variables de entorno

const db = new Sequelize(process.env.DATABASE_URL,{
    define: {
        timestamps: false
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases: false
});

export default db;

//estas credenciales de la db se deben ocultar con las variables de entorno al momento de deployment