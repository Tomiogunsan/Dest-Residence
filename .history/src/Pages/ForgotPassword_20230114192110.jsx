import React, {useState} from 'react';
import doorKey from '../assets/key.png';

import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default function ForgotPassword() {
  
  const[email, setEmail] = useState('');
 
  function onChange(event){
    setEmail(event.target.value)
  }

  async function onSubmit(e) {
    e.preventDefault()
    try{
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success()
    }catch(error){
      toast.error('Could not send reset password')
    }
  }

  return (
     <section>
    <h1 className='text-3xl text-center mt-6 font-bold '>
      Forgot Password
    </h1>
    <div className='grid md:grid-cols-2 gap-8 px-6 py-14 max-w-[1270px] mx-auto' >
      <div>
        <img src={doorKey} alt="A door key" className='w-[100%] rounded-2xl' />
      </div>
      <div className='flex flex-col justify-center'>
        <form onSubmit={onSubmit}> 
        <input type="email" 
          id='email' 
          value={email} 
          onChange={onChange}
          placeholder='Email address'
          className='w-full mb-6 px-4 py-2 text-xl text-gray-700
           bg-white border-gray-300 rounded transition ease-in-out'/>
          
           
          <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
            <p className='mb-6 '>
               Have an account?
            <Link to='/sign-in' className='text-red-600 hover:text-red-700
            transition duration-200 ease-in-out ml-1'>Sign in</Link>
            </p>
               <p>
              <Link to='/sign-in' className='text-blue-600
               hover:text-blue-700
            transition duration-200 ease-in-out '>Sign in instead</Link>
            </p>
            </div>
            <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm 
        font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out 
        hover:shadow-lg active:bg-blue-800'
        type='submit'>
          Send reset password
        </button>
        <div className='my-4 flex before:border-t before:flex-1 items-center
         before:border-gray-400 after:border-t after:flex-1 
         after:border-gray-400'>
          <p className='text-center font-semibold mx-4'>OR</p>
          </div>
          <OAuth />
        </form>
        
        
      </div>
    </div>
  </section>
  )
}
