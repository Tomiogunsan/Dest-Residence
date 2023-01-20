import React, {useState} from 'react';
import doorKey from '../assets/key.png';
import {AiFillEyeInvisible , AiFillEye}from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {db} from '../firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function SignUp() {
  const[showPassword, setShowPassword] = useState(false);
  const[loading, setLoading] = useState(false)
  const[formData, setFormData] = useState(
    {
      name:'',
      email: '',
      password: '',
    }
  );

  
  const {email, password, name} = formData;
  const navigate = useNavigate()
  function onChange(event){
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }))
  }

  async function onSubmit(e) {
    e.preventDefault();

    try{
      const auth = getAuth();
       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
       updateProfile(auth.currentUser, {
        displayName: name,
      })
      const user = userCredential.user;
      const formDataCopy = {...formData}
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      setLoading
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
    
      toast.success('Sign up was successful')
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong with the registration')
    }
  }

  return (
     <section>
    <h1 className='text-3xl text-center mt-6 font-bold '>
      Sign Up
    </h1>
    <div className='grid md:grid-cols-2 gap-8 px-6 py-14 max-w-[1270px] mx-auto' >
      <div>
        <img src={doorKey} alt="A door key" className='w-[100%] rounded-2xl' />
      </div>
      <div className='flex flex-col justify-center'>
        <form onSubmit={onSubmit}> 
        <input type="text" 
          id='name' 
          value={name} 
          onChange={onChange}
          placeholder='Full name'
          className='w-full mb-6 px-4 py-2 text-xl text-gray-700
           bg-white border-gray-300 rounded transition ease-in-out'/>

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
               Have an account?
            <Link to='/sign-in' className='text-red-600 hover:text-red-700
            transition duration-200 ease-in-out ml-1'>Sign in</Link>
            </p>
               <p>
              <Link to='/forgot-password' className='text-blue-600
               hover:text-blue-700
            transition duration-200 ease-in-out '>Forgot password?</Link>
            </p>
            </div>
            <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm 
        font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out 
        hover:shadow-lg active:bg-blue-800'
        type='submit'>
          Sign up
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
