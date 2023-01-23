import { Router } from "express";
import { getDoramas, postDorama } from "../controllers/dorama.controller.js";
import { validateSchema } from "../middleware/dorama.middleware.js";

const route = Router()

route.post('/dorama', validateSchema, postDorama)
route.get('/dorama', getDoramas)

export default route