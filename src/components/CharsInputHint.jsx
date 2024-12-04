export default function CharsInputHint ({handleSelection ,charIcons, charSearch}){
    
    return(
        <div className="cards_search">
            {charSearch.length>0 ? charSearch.map((char)=>{
                return(
                    <div onMouseDown={()=>handleSelection(char.id)} className="card_searched">
                        <img src={char.icon} alt="" />
                        <span>{char.nome}</span>
                    </div>
                )
            }) : null}
        </div>
    )
}