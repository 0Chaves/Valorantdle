export default function CharsInputHint ({charIcons, charPrev}){
    
    return(
        <>
        <div className="cardsSearch">
            {charPrev.length>0 ? charPrev.map((char)=>{
                return(
                    <>
                    <div className="cardSearched">
                        <img src={char.icon} alt="" />
                        <span>{char.nome}</span>
                    </div>
                    </>
                )
            }) : null}
        </div>
        </>
    )
}