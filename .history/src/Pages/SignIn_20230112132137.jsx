import React from 'react';
import doorKey from '../assets/key.png';

export default function SignIn() {
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold '>
        Sign In
      </h1>
      <div className='grid md'>
        <div>
          <img src={doorKey} alt="" />
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
