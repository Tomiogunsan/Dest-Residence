import React, { useState } from 'react';
import doorKey from '../assets/key.png';

export default function SignIn() {
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
        <div className='bg-black'>
          <form className='w-full'> 
            <input type="email" 
            id='email' 
            value={email} 
            onChange={onChange}
            placeholder=/>
          </form>
        </div>
      </div>
    </section>
  )
}
