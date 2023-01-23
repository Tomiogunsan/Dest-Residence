import { doc } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { db } from '../firebase'

export default function Contact({userRef, listing}) {
    useEffect(()=> {
        async function getLandlord(){
            const docRef = doc(db, 'users', userRef )
            const doc
        }
    }, [])
  return (
    <div>Contact</div>
  )
}
