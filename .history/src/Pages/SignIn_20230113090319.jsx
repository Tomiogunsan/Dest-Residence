import React, { useState } from 'react';
import doorKey from '../assets/key.png';
import {AiFillEyeInvisible , AiFillEye}from 'react-icons/ai'
import { Link } from 'react-router-dom';

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
        <div className='flex flex-col justify-center'>
          <form className=''> 
            <input type="email" 
            id='email' 
            value={email} 
            onChange={onChange}
            placeholder='Email address'
            className='w-full mb-6 px-4 py-2 text-xl text-gray-700
             bg-white border-gray-300 rounded transition ease-in-out'/>
            
             <div className='relative mb-6'>
             <input type={showPassword ? 'text' : "password" }
            id='password' 
            value={password} 
            onChange={onChange}
            placeholder='Password'
            className='w-full px-4 py-2 text-xl text-gray-700
             bg-white border-gray-300 rounded transition ease-in-out'/>
             {showPassword ? <AiFillEyeInvisible className='absolute right-3 top-3 text-xl 
             cursor-pointer' onClick={() => setShowPassword((prevState) => !prevState)}/> : 
            <AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer'
            onClick={() => setShowPassword((prevState) => !prevState)}/>}
             </div>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6 '>
                Don't have a account?
              <Link to='/sign-up' className='text-red-600 hover:text-red-700
              transition duration-200 ease-in-out ml-1'>Register</Link>
              </p>
                 <p>
                <Link to='/forgot-password' className='text-blue-600
                 hover:text-blue-700
              transition duration-200 ease-in-out '>Forgot password?</Link>
              </p>
              </div>
          </form>
          <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm 
          font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out 
          hover:shadow-lg active:bg-blue-800'
          type='submit'>Sign in
          </button>
          <div></div>

        </div>
      </div>
    </section>
  )
}
