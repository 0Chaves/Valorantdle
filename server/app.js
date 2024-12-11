const express = require('express')
const cors = require('cors')
const app = express()
const Char = require('./models/char')

app.use(express.json())
app.use(cors()) 
app.use(express.urlencoded({extended: true}))

app.get('/chars', async (req,res)=>{
    const chars = await Char.find({})
    res.status(200).json(chars)
})

app.listen(3000, () => {
    console.log("Servidor ligado na porta 3000")
})