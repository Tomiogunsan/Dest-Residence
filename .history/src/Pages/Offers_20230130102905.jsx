import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {collection, getDocs, limit, orderBy, query, where} from 'firebase/firestore'
import { db } from "../firebase";
import Spinner from "../components/Spinner";


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
           setListings(listings)
           setLoading(false)
      } catch(error){
        toast.error('Could not fetch listing')
      }
    }
    fetchListings()
  }, []);

  return (
    <div className='max-w-[1270px] mx-auto px-3'>
     <h1 className='text-3xl text-center mt-6 font-bold'>Offers</h1>
     {loading ?  (
      <Spinner />
     ) : listings && listings.length > 0 ? (
      <>
      <main>
        <ul>
          {listings.map((listing) => ())}
        </ul>
      </main>
      </>
     ): (
      <p>There are no current offers </p>
     )}
    </div>
  )
}
