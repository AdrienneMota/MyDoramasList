import { insertDorma} from "../repositories/doramas.repository.js";
import { Request, Response } from "express"
import { Dorama } from "../protocols/doramas.protocol.js";
import doramaSchema from "../schemas/dorama.schema.js";

async function postDorama(req: Request, res: Response) {
    const dorama = req.body as Dorama

    const { error } = doramaSchema.validate( dorama, {abortEarly: false})
    if(error){
        const erros = error.details.map( d => d.message)
        return res.status(400).send(erros)
    }

    insertDorma(dorama)
    
    res.status(201).send(`Dorama ${dorama.name} na lista.`) 
}


export{
    postDorama
}