import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div>
        <header className='flex justify-between items-center px-3 py-2 '>
            <div>
                <img src={logo} alt="Company logo" className='cursor-pointer h-14'/>
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
