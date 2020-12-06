const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')
const cors = require('cors');

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        Tabelas.init(conexao)
        
        const app = customExpress()

        app.use(cors());

        app.listen(3000, () => console.log ('servidor rodando na porta 3000')) 
    }


})



