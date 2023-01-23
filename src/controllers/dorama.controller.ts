import { insertDorama, selectDoramas} from "../repositories/doramas.repository.js";
import { Request, Response } from "express"


export async function postDorama(req: Request, res: Response) : Promise<void>  {
    const dorama = res.locals.dorama
    insertDorama(dorama)    
    res.status(201).send(`Dorama ${dorama.name} na lista.`) 
}

export async function getDoramas(req: Request, res: Response) : Promise<void>{
    const lista = await selectDoramas()
    res.send(lista.rows)
}

