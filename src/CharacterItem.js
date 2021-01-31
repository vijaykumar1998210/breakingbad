import React, { useState } from 'react'

export default function CharacterItem({item}) {
   
    const [change,setChange] = useState(false);


    return (
        
        
        <div className= "card">
         <i className="fas fa-bars" onClick={()=>setChange(!change)}></i>
        <div className="imgbox">
            <img src={item.img} alt= "img"></img>
        </div>
        <div className={`contentbox ${change ? 'content':''}`}>
            <span className="name">Name :{item.name}</span>
            <span className="name">Occupation : {item.occupation}</span>
            <span className="name">Nick Name :{item.nickname}</span>
            <span className="name">Breaking Bad Seasons :{item.appearance}</span>
            
        </div>

        
        </div>
            
        
    )
}

