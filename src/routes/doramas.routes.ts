import { Router } from "express";
import { postDorama } from "../controllers/dorama.controller.js";

const route = Router()

route.post('/dorama', postDorama)

export default route