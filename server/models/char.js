const {mongoose} = require('../db')

const cursoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    sexo:{
        type: String,
        required: true
    },
    funcao: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
})

const Char = mongoose.model('Char', cursoSchema)

module.exports = Char