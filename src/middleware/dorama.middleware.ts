import doramaSchema from "../schemas/dorama.schema.js";
import { Request, Response, NextFunction } from "express";
import { Dorama } from "../protocols/doramas.protocol.js";

export function validateSchema(req: Request, res: Response, next: NextFunction) : Promise <void>{
    const dorama = req.body as Dorama

    const { error } = doramaSchema.validate( dorama, {abortEarly: false})
    if(error){
        const erros = error.details.map( d => d.message)
        res.status(422).send(erros)
        return
    }    
    res.locals.dorama = dorama
    next()
}