import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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
      nome: 'Astra',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Controlador',
      icon: Astra_icon
    },
    {
      nome: 'Breach',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Iniciador',
      icon: Breach_icon
    },
    {
      nome: 'Brimstone',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Controlador',
      icon: Brimstone_icon
    },
    {
      nome: 'Chamber',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Sentinela',
      icon: Chamber_icon
    },
    {
      nome: 'Clove',
      ano: 2024,
      sexo: 'Feminino',
      funcao: 'Controlador',
      icon: Clove_icon
    },
    {
      nome: 'Cypher',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Sentinela',
      icon: Cypher_icon
    },
    {
      nome: 'Deadlock',
      ano: 2023,
      sexo: 'Feminino',
      funcao: 'Sentinela',
      icon: Deadlock_icon
    },
    {
      nome: 'Fade',
      ano: 2022,
      sexo: 'Feminino',
      funcao: 'Iniciador',
      icon: Fade_icon
    },
    {
      nome: 'Gekko',
      ano: 2023,
      sexo: 'Masculino',
      funcao: 'Iniciador',
      icon: Gekko_icon
    },
    {
      nome: 'Harbor',
      ano: 2022,
      sexo: 'Masculino',
      funcao: 'Controlador',
      icon: Harbor_icon
    },
    {
      nome: 'Iso',
      ano: 2023,
      sexo: 'Masculino',
      funcao: 'Iniciador',
      icon: Iso_icon
    },
    {
      nome: 'Jett',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Duelista',
      icon: Jett_icon
    },
    {
      nome: 'Killjoy',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Sentinela',
      icon: KJ_icon
    },
    {
      nome: 'KAY/O',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Iniciador',
      icon: KO_icon
    },
    {
      nome: 'Neon',
      ano: 2022,
      sexo: 'Feminino',
      funcao: 'Duelista',
      icon: Neon_icon
    },
    {
      nome: 'Omen',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Controlador',
      icon: Omen_icon
    },
    {
      nome: 'Phoenix',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Duelista',
      icon: Phoenix_icon
    },
    {
      nome: 'Raze',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Duelista',
      icon: Raze_icon
    },
    {
      nome: 'Reyna',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Duelista',
      icon: Reyna_icon
    },
    {
      nome: 'Sage',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Sentinela',
      icon: Sage_icon
    },
    {
      nome: 'Skye',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Iniciador',
      icon: Skye_icon
    },
    {
      nome: 'Sova',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Iniciador',
      icon: Sova_icon
    },
    {
      nome: 'Viper',
      ano: 2021,
      sexo: 'Feminino',
      funcao: 'Controlador',
      icon: Viper_icon
    },
    {
      nome: 'Yoru',
      ano: 2021,
      sexo: 'Masculino',
      funcao: 'Duelista',
      icon: Yoru_icon
    },
    {
      nome: 'Vyse',
      ano: 2024,
      sexo: 'Feminino',
      funcao: 'Sentinela',
      icon: Vyse_icon
    }
  ]

  const [inputNome, setInputNome] = useState('')
  const [charPrev, setCharPrev] = useState([])

  const handleCharPrev = (e) =>{
    setInputNome(e.target.value)
  }

  useEffect(()=>{
    const filtredChars = chars.filter(char=> {
      if(inputNome==''){
        return false
      }
      if(inputNome.length > char.nome.length){
        return false
      }
      else{
        const sliced = char.nome.toLowerCase().substring(0,(inputNome.length))
        console.log(sliced)
        if(sliced === inputNome.toLowerCase()){
          return true
        }
        else{
          return false
        }
      }
    })
    setCharPrev(filtredChars)
  }, [inputNome])

  const printar = () =>{
    console.log(charPrev)
    console.log(inputNome)
  }
  return (
    <>
      <div className='search'>
        <input type="text" onChange={handleCharPrev} value={inputNome}/>
        {charPrev.length>0? <CharsInputHint charPrev={charPrev} charIcons={charIcons}/> : null}
        <button onClick={()=>printar()}>printar</button>
      </div>
    </>
  )
}

export default App
