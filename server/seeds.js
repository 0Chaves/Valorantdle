const Char = require('./models/char')

const char1 = new Char({
    nome: 'Astra',
    ano: 2021,
    sexo: 'Feminino',
    funcao: 'Controlador',
    icon: 'Astra_icon'
})
const char2 = new Char({
    nome: 'Breach',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Iniciador',
      icon: 'Breach_icon'
})
const char3 = new Char({
    nome: 'Brimstone',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Controlador',
      icon: 'Brimstone_icon'
})
const char4 = new Char({
    nome: 'Chamber',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Sentinela',
      icon: 'Chamber_icon'
})
const char5 = new Char({
    nome: 'Clove',
      ano: 2024,
      sexo: 'Feminino',
      funcao: 'Controlador',
      icon: 'Clove_icon'
})
const char6 = new Char({
    nome: 'Cypher',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Sentinela',
      icon: 'Cypher_icon'
})
const char7 = new Char({
    nome: 'Deadlock',
      ano: 2023,
      sexo: 'Feminino',
      funcao: 'Sentinela',
      icon: 'Deadlock_icon'
})
const char8 = new Char({
    nome: 'Fade',
      ano: 2022,
      sexo: 'Feminino',
      funcao: 'Iniciador',
      icon: 'Fade_icon'
})
const char9 = new Char({
    nome: 'Gekko',
      ano: 2023,
      sexo: 'Masculino',
      funcao: 'Iniciador',
      icon: 'Gekko_icon'
})
const char10 = new Char({
    nome: 'Harbor',
    ano: 2022,
    sexo: 'Masculino',
    funcao: 'Controlador',
    icon: 'Harbor_icon'
})
const char11 = new Char({
    nome: 'Iso',
      ano: 2023,
      sexo: 'Masculino',
      funcao: 'Iniciador',
      icon: 'Iso_icon'
})
const char12 = new Char({
    nome: 'Jett',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Duelista',
      icon: 'Jett_icon'
})
const char13 = new Char({
    nome: 'Killjoy',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Sentinela',
      icon: 'KJ_icon'
})
const char14 = new Char({
    nome: 'KAY/O',
    ano: 2021,
    sexo: 'Masculino',
    funcao: 'Iniciador',
    icon: 'KO_icon'
})
const char15 = new Char({
    nome: 'Neon',
    ano: 2022,
    sexo: 'Feminino',
    funcao: 'Duelista',
    icon: 'Neon_icon'
})
const char16 = new Char({
    nome: 'Omen',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Controlador',
      icon: 'Omen_icon'
})
const char17 = new Char({
    nome: 'Phoenix',
    ano: 2021,
    sexo: 'Masculino',
    funcao: 'Duelista',
    icon: 'Phoenix_icon'
})
const char18 = new Char({
    nome: 'Raze',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Duelista',
      icon: 'Raze_icon'
})
const char19 = new Char({
    nome: 'Reyna',
    ano: 2021,
    sexo: 'Feminino',
    funcao: 'Duelista',
    icon: 'Reyna_icon'
})
const char20 = new Char({
    nome: 'Sage',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Sentinela',
      icon: 'Sage_icon'
})
const char21 = new Char({
    nome: 'Skye',
    ano: 2021,
    sexo: 'Feminino',
    funcao: 'Iniciador',
    icon: 'Skye_icon'
})
const char22 = new Char({
    nome: 'Sova',
    ano: 2021,
    sexo: 'Masculino',
    funcao: 'Iniciador',
    icon: 'Sova_icon'
})
const char23 = new Char({
    nome: 'Viper',
    ano: 2021,
    sexo: 'Feminino',
    funcao: 'Controlador',
    icon: 'Viper_icon'
})
const char24 = new Char({
    nome: 'Yoru',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Duelista',
      icon: 'Yoru_icon'
})
const char25 = new Char({
    nome: 'Vyse',
      ano: 2024,
      sexo: 'Feminino',
      funcao: 'Sentinela',
      icon: 'Vyse_icon'
})

Char.insertMany([char1, char2, char3, char4, char5, char6, char7, char8, char9, char10, char11, char12, char13, char14, char15, char16, char17, char18, char19, char20, char21, char22, char23, char24, char25])
    .then(res => {
        console.log(res)
    })
    .catch(erro => {
        console.log(erro)
    })