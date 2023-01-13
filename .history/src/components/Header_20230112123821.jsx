import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import logo from '../assets/logo.png';

export default function Header() {
    const location = useLocation();
   const navigate = useNavigate();

    function pathMathRoute(route) {
        if(route === location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 py-2 max-w-[1260px]  mx-auto'>
            
                <img src={logo} 
                alt="Company logo" 
                className='cursor-pointer h-15' 
                onClick={()=> navigate('/')}
                />
            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                     ${pathMathRoute('/') && 'text-black border-b-blue-600'}`} onClick={()=> navigate('/')}>Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                    ${pathMathRoute('/offers') && 'text-black border-b-blue-600'}`}>Offers</li>
                    <li className={ `cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                    ${pathMathRoute('/sign-in') && 'text-black border-b-blue-600'}`}>Sign in</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
