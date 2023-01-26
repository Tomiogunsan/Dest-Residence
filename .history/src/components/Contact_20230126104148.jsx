import { doc, getDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { db } from '../firebase'

export default function Contact({userRef, listing}) {
    const [landlord, setLandlord] = useState(null)
    const [message, setMessage] = useState('')
    useEffect(()=> {
        async function getLandlord(){
            const docRef = doc(db, 'users', userRef )
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setLandlord(docSnap.data())
            }else {
                toast.error('Could not get landlord data')
            }
        }
        getLandlord();
    }, [userRef])

    function onChange(e){
        setMessage(e.target.value)
    }
  return (
    <>{landlord !== null && (
        <div className='flex flex-col w-full '>
            <p >Contact {landlord.name} for the {listing.name.toLowerCase()}</p>
            <div>
                <textarea className='w-full px-4 py-2 
                text-xl text-gray-700 border border-gray-300 rounded transition durtation-150 
                ease-in-out focus:'
                name="message"
                 id="message"
                  rows="2"
                  value={message}
                  onChange={onChange}>

                  </textarea>
            </div>
            <a href={`mailto:${landlord.email}?Subject=${listing.name}&body=${message}`}>
                Send Message
            </a>
        </div>
    )}</>
  )
}
