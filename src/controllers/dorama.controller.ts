import { insertDorama, selectDoramas, dropsDorama, updateGradeDorama} from "../repositories/doramas.repository.js";
import { Request, Response } from "express"
import { NewDorama, updateDorama } from "../protocols/doramas.protocol.js";
import connection from "../database/db.js";


export async function postDorama(req: Request, res: Response) : Promise<void>  {
    const dorama = res.locals.dorama as NewDorama
    try {
        insertDorama(dorama)    
    
        
        res.status(201).send(`Dorama ${dorama.name} na lista.`) 
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function getDoramas(req: Request, res: Response) : Promise<void>{
    try {
        const lista = await selectDoramas()
        res.send(lista.rows)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
   
}

export async function deleteDorama(req: Request, res: Response) : Promise<void> {
    const {id, name} = req.body as updateDorama

    try {
        const message = dropsDorama(id, name)
        res.send(message)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
    
}

export async function patchDorama(req: Request, res: Response) : Promise<void> {
    const dorama = req.body as updateDorama
    try {
        const message = updateGradeDorama(dorama)
        res.send(message)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
    
}

export async function getDashboard(req: Request, res: Response): Promise<void> {
    try {
        const resultado = await connection.query(`
        select grade, COUNT(grade)as grade_five FROM doramas GROUP BY grade;
        `)

        res.send({dashboard: resultado.rows})
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
    
}



