export default function CharsInputHint ({charIcons, charSearch}){
    
    return(
        <>
        <div className="cardsSearch">
            {charSearch.length>0 ? charSearch.map((char)=>{
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