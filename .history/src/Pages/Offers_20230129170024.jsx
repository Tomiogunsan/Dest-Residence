import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {collection, getDocs, limit, orderBy, query, where} from 'firebase/firestore'
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
           limit(8));
           const querySnap = await getDocs(q)
           const listings = []
           querySnap.forEach((doc) => {
            return listings.push({
              id: doc.id,
              data: doc.data()
            })
           })
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
