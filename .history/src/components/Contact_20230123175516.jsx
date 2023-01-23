import React from 'react'
import { useEffect } from 'react'

export default function Contact({userRef}) {
    useEffect(()=> {
        async function getLandlord(){
            const docRef = doc(db, 'users')
        }
    }, [])
  return (
    <div>Contact</div>
  )
}
