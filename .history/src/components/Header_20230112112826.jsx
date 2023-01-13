import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div className='bg-white border-b shadow-sm st'>
        <header className='flex justify-between items-center px-3 py-2 max-w-[1260px]  mx-auto'>
            <div>
                <img src={logo} alt="Company logo" className='cursor-pointer h-14'/>
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
