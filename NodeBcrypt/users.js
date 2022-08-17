const express = require('express')
const pg = require('pg')
const bcrypt = require('bcrypt')
var router = express.Router()
const jwt = require('jsonwebtoken')

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })

router.post('/', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.status(401).send({
                message: "Conexão não autorizada",
                erro: err.message
            })
        }

        bcrypt.hash(req.body.senha, 10, (erro, hash) => {
            var sql = 'insert into usuario(nome, email, senha, perfil) values($1, $2, $3, $4)'
            var dados = [req.body.nome, req.body.email, hash, req.body.perfil]
            client.query(sql, dados, (error, result) => {
                if (error) {
                    return res.send({
                        message: "Erro ao retornar usuário",
                        erro: error.message
                    })
                }

                if (result) {
                    return res.status(201).send({
                        message: 'Usuário cadastrado com sucesso',
                        usuario: `Nome: ${dados[0]}, Email: ${dados[1]}, Senha: ${dados[2]}, Perfil: ${dados[3]}`
                    })
                }
            })
            release()
        })
    })

})

router.post('/login', (req, res) => {
    pool.connect((err, client, release) => {
        var dados = [req.body.email]
        var sql = `select * from usuario where email = $1`
        client.query(sql, dados, (erro, result) => {
            if(result.rowCount > 0){
                bcrypt.compare(req.body.senha, result.rows[0].senha, (err, results) => {
                    if(results) {
                        var token = jwt.sign({
                            nome: result.rows[0].nome,
                            email: result.rows[0].email,
                            perfil: result.rows[0].perfil
                        }, process.env.JWT_KEY)
                        return res.send({
                            token: token
                        })
                    } else {
                        return res.status(403).send({
                            message: "Senha incorreta"
                        })
                    }
                })
            } else {
                res.send({
                    message: "Informações de usuário incorretas" 
                })
            }
        })
    })

})

module.exports = router
