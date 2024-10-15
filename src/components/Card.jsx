export default function Card ({key, char, chosen}){
    return(
        <div className="Card">
            <img src="" alt="" />
            <div className={`${char.nome == chosen.nome ? 'correct' : 'incorrect'}`}>Nome</div>
        </div>
    )
}