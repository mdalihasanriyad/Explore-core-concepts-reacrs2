import { useState } from "react"

export default function Team (){
    const [team, setCount] =useState(11)
    const handleAdd = ()=>{
        const newTeam = team +1;
        setCount(newTeam)
    }
    const handleRemove =()=>{
        setCount(team-1)
    }

    const teamStyle ={
        border: '2px solid red',
        borderRadius: '20px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}