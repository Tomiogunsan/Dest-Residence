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
      setLoading(true)
      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      setLoading(false)
      toast.success('Sign up was successful')
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong with the registration')
    }
  }

  return (
     {l}
  )
}
