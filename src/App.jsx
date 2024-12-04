import { useState, useRef, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import Tries from './components/Tries'
import './App.css'
import './styles/Search.css'
import Astra_icon from './icons/Astra_icon.png'
import Breach_icon from './icons/Breach_icon.png'
import Brimstone_icon from './icons/Brimstone_icon.png'
import Chamber_icon from './icons/Chamber_icon.png'
import Clove_icon from './icons/Clove_icon.png'
import Cypher_icon from './icons/Cypher_icon.png'
import Deadlock_icon from './icons/Deadlock_icon.png'
import Fade_icon from './icons/Fade_icon.png'
import Gekko_icon from './icons/Gekko_icon.png'
import Harbor_icon from './icons/Harbor_icon.png'
import Iso_icon from './icons/Iso_icon.png'
import Jett_icon from './icons/Jett_icon.png'
import KJ_icon from './icons/KJ_icon.png'
import KO_icon from './icons/KO_icon.png'
import Neon_icon from './icons/Neon_icon.png'
import Omen_icon from './icons/Omen_icon.png'
import Phoenix_icon from './icons/Phoenix_icon.png'
import Raze_icon from './icons/Raze_icon.png'
import Reyna_icon from './icons/Reyna_icon.png'
import Sage_icon from './icons/Sage_icon.png'
import Skye_icon from './icons/Skye_icon.png'
import Sova_icon from './icons/Sova_icon.png'
import Viper_icon from './icons/Viper_icon.png'
import Vyse_icon from './icons/Vyse_icon.png'
import Yoru_icon from './icons/Yoru_icon.png'

import CharsInputHint from './components/CharsInputHint'

function App() {
  const charIcons = [
    Astra_icon
  ]
  const chars = [
    {
      id: uuidv4(),
      nome: 'Astra',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Controlador',
      icon: Astra_icon
    },
    {
      id: uuidv4(),
      nome: 'Breach',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Iniciador',
      icon: Breach_icon
    },
    {
      id: uuidv4(),
      nome: 'Brimstone',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Controlador',
      icon: Brimstone_icon
    },
    {
      id: uuidv4(),
      nome: 'Chamber',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Sentinela',
      icon: Chamber_icon
    },
    {
      id: uuidv4(),
      nome: 'Clove',
      ano: 2024,
      sexo: 'Feminino',
      funcao: 'Controlador',
      icon: Clove_icon
    },
    {
      id: uuidv4(),
      nome: 'Cypher',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Sentinela',
      icon: Cypher_icon
    },
    {
      id: uuidv4(),
      nome: 'Deadlock',
      ano: 2023,
      sexo: 'Feminino',
      funcao: 'Sentinela',
      icon: Deadlock_icon
    },
    {
      id: uuidv4(),
      nome: 'Fade',
      ano: 2022,
      sexo: 'Feminino',
      funcao: 'Iniciador',
      icon: Fade_icon
    },
    {
      id: uuidv4(),
      nome: 'Gekko',
      ano: 2023,
      sexo: 'Masculino',
      funcao: 'Iniciador',
      icon: Gekko_icon
    },
    {
      id: uuidv4(),
      nome: 'Harbor',
      ano: 2022,
      sexo: 'Masculino',
      funcao: 'Controlador',
      icon: Harbor_icon
    },
    {
      id: uuidv4(),
      nome: 'Iso',
      ano: 2023,
      sexo: 'Masculino',
      funcao: 'Iniciador',
      icon: Iso_icon
    },
    {
      id: uuidv4(),
      nome: 'Jett',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Duelista',
      icon: Jett_icon
    },
    {
      id: uuidv4(),
      nome: 'Killjoy',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Sentinela',
      icon: KJ_icon
    },
    {
      id: uuidv4(),
      nome: 'KAY/O',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Iniciador',
      icon: KO_icon
    },
    {
      id: uuidv4(),
      nome: 'Neon',
      ano: 2022,
      sexo: 'Feminino',
      funcao: 'Duelista',
      icon: Neon_icon
    },
    {
      id: uuidv4(),
      nome: 'Omen',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Controlador',
      icon: Omen_icon
    },
    {
      id: uuidv4(),
      nome: 'Phoenix',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Duelista',
      icon: Phoenix_icon
    },
    {
      id: uuidv4(),
      nome: 'Raze',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Duelista',
      icon: Raze_icon
    },
    {
      id: uuidv4(),
      nome: 'Reyna',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Duelista',
      icon: Reyna_icon
    },
    {
      id: uuidv4(),
      nome: 'Sage',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Sentinela',
      icon: Sage_icon
    },
    {
      id: uuidv4(),
      nome: 'Skye',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Iniciador',
      icon: Skye_icon
    },
    {
      id: uuidv4(),
      nome: 'Sova',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Iniciador',
      icon: Sova_icon
    },
    {
      id: uuidv4(),
      nome: 'Viper',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Controlador',
      icon: Viper_icon
    },
    {
      id: uuidv4(),
      nome: 'Yoru',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Duelista',
      icon: Yoru_icon
    },
    {
      id: uuidv4(),
      nome: 'Vyse',
      ano: 2024,
      sexo: 'Feminino',
      funcao: 'Sentinela',
      icon: Vyse_icon
    }
  ]

  const [charsLeft, setCharsLeft] = useState(chars)
  const [inputNome, setInputNome] = useState('')
  const [charSearch, setCharSearch] = useState([])
  const [charTries, setCharTries] = useState([])
  const chosen = chars[0]

  const handleCharSearch = (e) =>{
    setInputNome(e.target.value)
  }

  const personagens_restantes = () =>{
    const filtredChars = charsLeft.filter(char=> {
    if(inputNome==''){
      return false
    }
    if(inputNome.length > char.nome.length){
      return false
    }
    else{
      const sliced = char.nome.toLowerCase().substring(0,(inputNome.length))
      if(sliced === inputNome.toLowerCase()){
        return true
      }
      else{
        return false
      }
    }
    })
    setCharSearch(filtredChars)
  }

  useEffect(()=>{
    personagens_restantes()
  }, [inputNome])
  
  useEffect(()=>{
    personagens_restantes()
  }, [charsLeft])
  
  const printar = () =>{
    console.log(charSearch)
    console.log(inputNome)
  }

  const handleSelection = (id) =>{
    const charSelected = charSearch.filter(char=>char.id === id)[0]
    setCharTries([...charTries, charSelected])
    setCharsLeft(charsLeft.filter(char=>char.nome != charSelected.nome))
  }

  const accept = (e) =>{
    if(e.key === 'Enter'){
      if(charSearch[0] != undefined){
        setCharTries([...charTries, charSearch[0]])
        setCharsLeft(charsLeft.filter(char=>char.nome != charSearch[0].nome))  
      }
    }
  }

  return (
    <>
      <header>
        <p>Logo do valorant</p>
      </header>

      <section className='content'>
        <div className='search_container'>
          <input type="text" onChange={handleCharSearch} value={inputNome} onKeyDown={accept}/>
          {charSearch.length>0? <CharsInputHint handleSelection={handleSelection} charSearch={charSearch} charIcons={charIcons}/> : null}
        </div>

        <div className='tries_container'>
          <div className="descr">
              <div className="card_descricao">Personagem</div>
              <div className="card_descricao">Nome</div>
              <div className="card_descricao">Ano</div>
              <div className="card_descricao">Sexo</div>
              <div className="card_descricao">Funcao</div>
          </div>
          {charTries.length > 0 ? <Tries charTries={charTries} chosen={chosen}/> : null}
        </div>
      </section>

    </>
  )
}

export default App
