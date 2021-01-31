import React from 'react'
import CharacterItem from './CharacterItem'

export default function characters({chars}) {
    return (
        <div className= "card-container">
            {chars.map((item) => {
                 return <CharacterItem  key = {item.char_id} item ={item} />
                })}
        </div>
    )
}
