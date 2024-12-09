import Card from "./Card.jsx"

export default function Tries ({charTries, chosen}) {
    return(
        <div className="tries">
            {charTries.map(char=><Card key={char.id} char={char} chosen={chosen}/>)}
        </div>
    )
}