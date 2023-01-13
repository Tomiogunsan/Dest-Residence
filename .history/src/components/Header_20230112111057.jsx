import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div>
        <header className='flex justify-between items-center p'>
            <div>
                <img src={logo} alt="Company logo" className='cursor-pointer'/>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
