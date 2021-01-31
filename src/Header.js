import React from 'react'
import logo from '../src/logo.png'

export default function Header({searchvalue}) {
    return (
        <div className="header">
            <img src={logo} alt="logoimg" className='logoimg'></img>
            <input type="text"
            className="search"
            placeholder="search..."
            onChange = {searchvalue}
            
            />
        </div>
    )
}
