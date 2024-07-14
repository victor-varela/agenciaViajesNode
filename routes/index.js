//Este es el enrutador, solo debe consultar los endpoints o urls de la app

import express from "express";
import { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalleViaje } from "../controllers/paginasController.js";
import {guardarTestimonio} from '../controllers/testimonioController.js'

const router = express.Router();

router.get("/", paginaInicio );//paginaInicio es el controlador- se encarga de: logica y definir la vista

router.get("/nosotros", paginaNosotros);
router.get("/viajes", paginaViajes); // aca el controlador debe consultar la db para despues mostrar los viajes
router.get("/viajes/:slug", paginaDetalleViaje); // usamos el slug para definir dinamicamente cada ruta /: {slug}
router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", guardarTestimonio);

export default router;

//De esta manera este archivo routes inyecta las rutas en la url y llama a los controladores- Separa las obligaciones
