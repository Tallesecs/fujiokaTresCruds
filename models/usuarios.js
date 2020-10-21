const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Usuario {


    create(usuario, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        
        const dataValida = moment(data).isSameOrAfter(dataCriacao)

        const usuarioValido = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido: dataValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },

            {
                nome: 'usuario',
                valido: usuarioValido,
                mensagem: 'Usuario deve ter pelo menos cinco caracteres '
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido )
        const existemErros = erros.length

        if(existemErros) {
            res.status(400).json(erros)
        } else {
            const usuarioDatado = {...usuario, dataCriacao, data}

        
        const sql = 'INSERT INTO Usuarios SET ?'
    
        conexao.query(sql, usuarioDatado, (erro, usuario) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(usuario)
            }
        })

        }

        
    
    }

    list(res) {
        const sql = 'SELECT * FROM Usuarios'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }


    update(id, valores, res) {
        if(valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        }
        const sql = 'UPDATE Usuarios SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (error, resultados) => {
            if(error) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    delete(id, res) {
        const sql = 'DELETE FROM Usuarios WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Usuario