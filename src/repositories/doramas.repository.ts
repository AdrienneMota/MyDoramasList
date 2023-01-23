import { QueryResult } from "pg";
import connection from "../database/db.js";
import { DoramaEntity, NewDorama, updateDorama } from "../protocols/doramas.protocol.js";

function insertDorama(dorama: NewDorama){
   connection.query(`
    INSERT INTO doramas
        (name, overview, grade)
    VALUES
        ($1, $2, $3);
    `, [dorama.name, dorama.overview, dorama.grade])    
}

async function selectDoramas() : Promise<QueryResult<DoramaEntity>>{
    const doramas = connection.query(`
        SELECT * FROM doramas;
    `)

    return doramas
}

function dropsDorama(id: Number, name: string) : string{
    connection.query(`
    DELETE FROM doramas WHERE id=$1
    `,[id])

    return `${name} foi excluido da lista.`
}  

function updateGradeDorama(dorama : updateDorama) : string{
    const {id, grade} = dorama
    connection.query(`
    UPDATE doramas SET  grade=$1 WHERE id=$2
    `, [grade, id])
    return `O dorama recebeu nota ${grade}.`
}




export {
    insertDorama, selectDoramas, dropsDorama, updateGradeDorama
}