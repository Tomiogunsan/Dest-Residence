import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div>
        <header>
            <div>
                <img src={logo} alt="Company logo" className='cursor-pointer'/>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    
                </ul>
            </div>
        </header>
    </div>
  )
}
