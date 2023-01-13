import React, { useState } from 'react';
import doorKey from '../assets/key.png';
import {AiFillEyeInvisible , AiFillEye}from 'react-icons/ai'

export default function SignIn() {
  const[showPassword, setShowPassword] = useState(false);
  const[formData, setFormData] = useState(
    {
      email: '',
      password: '',
    }
  );
  const {email, password} = formData;
  function onChange(event){
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }))
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold '>
        Sign In
      </h1>
      <div className='grid md:grid-cols-2 gap-8 px-6 py-14 max-w-[1270px] mx-auto' >
        <div>
          <img src={doorKey} alt="A door key" className='w-[100%] rounded-2xl' />
        </div>
        <div className='flex flex-col'>
          <form className=''> 
            <input type="email" 
            id='email' 
            value={email} 
            onChange={onChange}
            placeholder='Email address'
            className='w-full px-4 py-2 text-xl text-gray-700
             bg-white border-gray-300 rounded transition ease-in-out'/>
            
             <div className='relative'>
             <input type={showPassword ? 'text' : "password" }
            id='password' 
            value={password} 
            onChange={onChange}
            placeholder='Password'
            className='w-full px-4 py-2 text-xl text-gray-700
             bg-white border-gray-300 rounded transition ease-in-out'/>
             </div>
            {showPassword ? <AiFillEyeInvisible/> : 
            <AiFillEye className='absolute right-3 top-3 text'/>}
          </form>
        </div>
      </div>
    </section>
  )
}
