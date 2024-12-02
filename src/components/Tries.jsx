import Card from "./Card.jsx"

export default function Tries ({charTries, chosen}) {
    return(
        <div className="tries">
            <div className="descr">
                <div className="card_descricao">Personagem</div>
                <div className="card_descricao">Nome</div>
                <div className="card_descricao">Ano</div>
                <div className="card_descricao">Sexo</div>
                <div className="card_descricao">Funcao</div>
            </div>
            
            {charTries.map(char=><Card key={char.id} char={char} chosen={chosen}/>)}
        </div>
    )
}