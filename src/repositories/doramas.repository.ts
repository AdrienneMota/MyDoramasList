import { QueryResult } from "pg";
import connection from "../database/db.js";
import { Dorama } from "../protocols/doramas.protocol.js";

function insertDorama(dorama: Dorama){
   connection.query(`
    INSERT INTO doramas
        (name, overview, grade)
    VALUES
        ($1, $2, $3);
    `, [dorama.name, dorama.overview, dorama.grade])    
}

async function selectDoramas() : Promise<QueryResult<Dorama>>{
    const doramas = connection.query(`
        SELECT * FROM doramas;
    `)

    return doramas
}

export {
    insertDorama,
    selectDoramas
}