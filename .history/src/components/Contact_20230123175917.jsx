import { doc, getDoc } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { db } from '../firebase'

export default function Contact({userRef, listing}) {
    const [Landlord, setLand]
    useEffect(()=> {
        async function getLandlord(){
            const docRef = doc(db, 'users', userRef )
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                se
            }
        }
    }, [])
  return (
    <div>Contact</div>
  )
}
