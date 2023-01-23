import express from "express"
import route from "./routes/doramas.routes.js"

const app = express()
app.use(express.json())
app.use(route)



app.listen(5000, () => console.log('Server is running in port 5000'))