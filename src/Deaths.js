import React, { useEffect, useState } from 'react'

export default function Deaths({chars,key}) {
    const [char,setChar] = useState([])


  const api_key = 'https://www.breakingbadapi.com/api'

  useEffect(() =>{
    const breakbad = async () =>{
      const response = await fetch(`${api_key}/deaths`);

    const data = await response.json();
    setChar(data)
    }

    breakbad();


  },[])


    return (
        <div className="container">
        {char.map((item)=>{
            return (
                
        <div className="card" key={item.death_id}>
        <div className="imgbox"></div>
        <div className="contentbox">
        <span className="name">Death :{item.death}</span>
        </div>
</div> 
        
                )
        })}
         
         
        </div> 
    
    )
}
