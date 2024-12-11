import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import Tries from './components/Tries'
import './App.css'
import './styles/Search.css'

import CharsInputHint from './components/CharsInputHint'

function App() {
  async function getChars () {
    const url = 'http://localhost:3000/chars'
    const {data} = await axios.get(url)
    setCharsLeft(data)
  }
 
  useEffect(()=>{
    getChars()
  }, [])
  
  const [charsLeft, setCharsLeft] = useState([])
  const [inputNome, setInputNome] = useState('')
  const [charSearch, setCharSearch] = useState([])
  const [charTries, setCharTries] = useState([])
  const chosen = charsLeft[0]

  const handleCharSearch = (e) =>{
    setInputNome(e.target.value)
  }

  const personagens_restantes = () => {
    if(inputNome === '') {
      setCharSearch([]);
      return;
    }
  
    const filtredChars = charsLeft.filter(char => {
      const sliced = char.nome.toLowerCase().substring(0, inputNome.length);
      return sliced === inputNome.toLowerCase();
    });
  
    setCharSearch(filtredChars);
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
          {charSearch.length>0? <CharsInputHint handleSelection={handleSelection} charSearch={charSearch}/> : null}
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
