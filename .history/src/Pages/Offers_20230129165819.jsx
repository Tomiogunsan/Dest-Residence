import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {collection, getDocs, orderBy, query, where} from 'firebase/firestore'
import { db } from "../firebase";


export default function Offers() {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchListings(){
      try{
        const listingRef = collection(db, 'listings')
        const q = query(listingRef,
           where('offer', '==', true), 
           orderBy('timestamp', 'desc'),
           lim(8));
           const querySnap = await getDocs(q)
      } catch(error){
        toast.error('Could not fetch listing')
      }
    }
    fetchListings()
  }, [])
  return (
    <div>

    </div>
  )
}