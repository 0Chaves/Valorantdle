export default function Card ({char, chosen}){
    return(
        <div className="card_container">
            <img src={`/src/icons/${char.icon}.png`} alt="" />
            <div className={`${char.nome == chosen.nome ? 'correct' : 'incorrect'} `}>{char.nome}</div>
            <div className={`${char.ano == chosen.ano ? 'correct' : 'incorrect'}`}>{char.ano}</div>
            <div className={`${char.sexo == chosen.sexo ? 'correct' : 'incorrect'}`}>{char.sexo}</div>
            <div className={`${char.funcao == chosen.funcao ? 'correct' : 'incorrect'}`}>{char.funcao}</div>
        </div>
    )
}