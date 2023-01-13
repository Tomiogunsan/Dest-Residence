import React from 'react';
import doorKey from '../assets/key.png';

export default function SignIn() {
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold '>
        Sign In
      </h1>
      <div className='grid md:grid-cols-2 gap-2 p-6 mt-14'>
        <div>
          <img src={doorKey} alt="A door key" className='md:w-[67%] lg:w-' />
        </div>
        <div>
          <form>
            <input type="text" />
          </form>
        </div>
      </div>
    </section>
  )
}
