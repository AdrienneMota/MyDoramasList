import pg from "pg"

const { Pool } = pg

const connection = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '636863',
    database: 'listDoramas'   
})

export default connection 