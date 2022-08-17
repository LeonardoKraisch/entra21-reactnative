const express = require('express')
const app = express()
const cors = require('cors')
const contatos = require('./contato')
const usuarios = require('./users')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/contatos', contatos)
app.use('/usuarios', usuarios)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`servidor executando em http://localhost:${PORT}`)
})