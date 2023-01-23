import { Router } from "express";
import { deleteDorama, getDoramas, getDashboard, patchDorama, postDorama } from "../controllers/dorama.controller.js";
import { validateSchema } from "../middleware/dorama.middleware.js";

const route = Router()

route.post('/dorama', validateSchema, postDorama)
route.get('/dorama', getDoramas)
route.delete('/dorama/drop', deleteDorama)
route.patch('/dorama/update', patchDorama)
route.get('/dorama/dashboard', getDashboard)

export default route