const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/dbValorantdle')
    .then(()=> console.log('Conectado ao MongoDB!'))
    .catch(erro => {
        console.log('Erro ao conectar')
        console.log(erro)
    })

module.exports = mongoose