import React, { useEffect, useState } from 'react'
import Characters from './Characters'
import './App.css'
import Header from './Header'
// import Deaths from './Deaths'


export default function App() {

const [char,setChar] = useState([])
const [search ,setSearch] = useState("")

  const api_key = 'https://www.breakingbadapi.com/api'

  useEffect(() =>{
    const breakbad = async () =>{
      const response = await fetch(`${api_key}/characters?name=${search}`);

    const data = await response.json();
    setChar(data)
    }

    breakbad();


  },[search])

  const Searchvalue = (e) =>{
   setSearch(e.target.value);
  }
  return (
    <>
    <Header searchvalue ={Searchvalue} />
    <div className ="maindiv">
     <Characters chars ={char} />
     {/* <Deaths chars = {char} /> */}
    </div>
    </>
  )
}

