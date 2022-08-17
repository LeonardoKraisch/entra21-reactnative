var express = require('express')
var router = express.Router()
const pg = require('pg')
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })

router.get('/', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.send({
                message: 'Conexão não autorizada',
                erro: err.message
            })
        }
        client.query('select * from contato', (error, result) => {
            if (error) {
                return res.send({
                    message: 'Erro ao buscar contatos',
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
        release()
    })
})

router.get('/:idcontato', (req, res) => {
    pool.connect((err, client, release) => {
        if (err) {
            return res.send({
                message: 'Conexão não autorizada',
                erro: err.message
            })
        }
        client.query(`select * from contato where id=${req.params.idcontato}`, (error, result) => {
            if (error) {
                return res.send({
                    message: 'Erro ao selecionar contato',
                    erro: error.message
                })
            }
            return res.status(200).send(result.rows)
        })
        release()
    })
})

router.post('/', (req, res) => {
    pool.connect((err, client, release) => {
        var sql = "insert into contato(nome, fone, email)values($1,$2,$3)"
        var dados = [req.body.nome, req.body.fone, req.body.email]
        client.query(sql, dados, (error, result) => {
            if (error) {
                return res.send({
                    message: 'Erro ao criar novo contato',
                    erro: error.message
                })
            }
            return res.status(201).send({
                message: 'Contato criado com sucesso',
                contato: `Nome: ${dados[0]}, Fone: ${dados[1]}, Email: ${dados[2]}`
            })
        })
        release()
    })
})

router.put('/:idcontato', (req, res) => {
    pool.connect((err, client, release) => {
        var sql = `update contato set nome = $1, fone = $2, email = $3 where id = $4`
        const { nome, fone, email} = req.body
        var dados = [nome, fone, email, req.params.idcontato]

        client.query(sql, dados, (error, result) => {
            if(error) {
                return res.send({
                    message: 'Falha ao alterar contato',
                    erro: error.message
                })
            }
            return res.status(200).send({
                message: 'Contato alterado com sucesso',
                contato: `ID: ${req.params.idcontato}, Nome: ${dados[0]}, Fone: ${dados[1]}, Email: ${dados[2]}`
            })
        })
    })
})

router.delete('/contatos/:idcontato', (req, res) => {
    pool.connect((err, client, release) => {
        var sql = 'delete from contato where id = $1'
        client.query(sql, [req.params.idcontato], (error, result) => {
            return res.send({
                message: 'contato excluido com sucesso',
                idcontato: req.params.idcontato
            })
        })
        release()
    })

})

module.exports = router
