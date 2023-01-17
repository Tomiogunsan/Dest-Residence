import React from 'react'
import spinner from '../assets/spinner.svg';

export default function Spinner() {
  return (
    <div className='bg-black bg-opacity-50 flex items-center justify-center fixed '>
        <div>
            <img src={spinner} alt="Loading.." className='h-24'/>
        </div>
    </div>
  )
}
