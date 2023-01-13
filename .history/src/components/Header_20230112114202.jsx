import React from 'react';
import { useLocation } from 'react-router';
import logo from '../assets/logo.png';

export default function Header() {
    const location = useLocation()
   

    function pathMathRoute(route) {
        
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 py-2 max-w-[1260px]  mx-auto'>
            <div>
                <img src={logo} alt="Company logo" className='cursor-pointer h-14'/>
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent`}>Home</li>
                    <li>Offers</li>
                    <li>Sign in</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
