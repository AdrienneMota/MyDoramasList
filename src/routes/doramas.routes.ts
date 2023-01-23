import { Router } from "express";
import { deleteDorama, getDoramas, patchDorama, postDorama } from "../controllers/dorama.controller.js";
import { validateSchema } from "../middleware/dorama.middleware.js";

const route = Router()

route.post('/dorama', validateSchema, postDorama)
route.get('/dorama', getDoramas)
route.delete('/dorama/drop', deleteDorama)
route.patch('/dorama/update', patchDorama)

export default route