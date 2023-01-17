import React from 'react'
import spinner from '../assets/spinner.svg';

export default function Spinner() {
  return (
    <div>
        <div>
            <img src={spinner} alt="Loading.." className='h-24'/>
        </div>
    </div>
  )
}
