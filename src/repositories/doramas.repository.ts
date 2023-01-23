import connection from "../database/db.js";
import { Dorama } from "../protocols/doramas.protocol.js";

async function insertDorma(dorama: Dorama){
    try {
        await connection.query(`
            INSERT INTO doramas
                (name, overview, grade)
            VALUES
                ($1, $2, $3)
            `, [dorama.name, dorama.overview, dorama.grade])
    } catch (error) {
        console.log(error)
    }
    
}

export {
    insertDorma
}