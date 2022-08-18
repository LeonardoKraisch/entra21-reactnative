import * as express from "express"
const app = express()
import user from './routes/userRoute'
import product from './routes/productRoute'
import dataSource from "./dataSource"

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

app.use(express.json())
app.use('/user', user)
app.use('/stock', product)

const PORT = process.env.PORT
app.listen(PORT, () => {console.log(`executando em http://localhost:${PORT}/user`)})