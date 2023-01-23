import { insertDorama, selectDoramas, dropsDorama, updateGradeDorama} from "../repositories/doramas.repository.js";
import { Request, Response } from "express"
import { NewDorama, updateDorama } from "../protocols/doramas.protocol.js";


export async function postDorama(req: Request, res: Response) : Promise<void>  {
    const dorama = res.locals.dorama as NewDorama
    insertDorama(dorama)    
    res.status(201).send(`Dorama ${dorama.name} na lista.`) 
}

export async function getDoramas(req: Request, res: Response) : Promise<void>{
    const lista = await selectDoramas()
    res.send(lista.rows)
}

export async function deleteDorama(req: Request, res: Response) : Promise<void> {
    const {id, name} = req.body as updateDorama

    const message = dropsDorama(id, name)
    res.send(message)

}

export async function patchDorama(req: Request, res: Response) : Promise<void> {
    const dorama = req.body as updateDorama

    const message = updateGradeDorama(dorama)
    res.send(message)
}



