export default function CharsInputHint ({handleSelection , charSearch}){
    
    return(
        <div className="cards_search">
            {charSearch.length>0 ? charSearch.map((char)=>{
                return(
                    <div key={char._id} onMouseDown={()=>handleSelection(char.id)} className="card_searched">
                        <img src={`/src/icons/${char.icon}.png`} alt="" />
                        <span>{char.nome}</span>
                    </div>
                )
            }) : null}
        </div>
    )
}