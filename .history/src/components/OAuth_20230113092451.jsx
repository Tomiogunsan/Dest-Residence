import React from 'react';
import {FcGoogle} from 'react-icons/fc'

export default function OAuth() {
  return (
    <button className='flex items-center justify-center w-full bg-red-600'>
        <FcGoogle />
        Continue with Google
    </button>
  )
}