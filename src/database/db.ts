import pg from "pg"

const { Pool } = pg

const connection = new Pool({
    host: '',
    port: ,
    user: 'postgres',
    password: '',
    database: 'listDoramas'   
})

export default connection 
