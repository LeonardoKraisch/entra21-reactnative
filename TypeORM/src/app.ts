import * as express from "express"
const app = express()
import user from './routes/userRoute'
import product from './routes/productRoute'

app.use(express.json())
app.use('/user', user)
app.use('/stock', product)

const PORT = process.env.PORT
app.listen(PORT, () => {console.log(`executando em http://localhost:${PORT}/user`)})