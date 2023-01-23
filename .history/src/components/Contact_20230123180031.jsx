import { doc, getDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { db } from '../firebase'

export default function Contact({userRef, listing}) {
    const [Landlord, setLandlord] = useState(null)
    useEffect(()=> {
        async function getLandlord(){
            const docRef = doc(db, 'users', userRef )
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setLandlord(docSnap.data())
            }
        }
    }, [])
  return (
    <div>Contact</div>
  )
}
