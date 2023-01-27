import { collection, getDoc, limit, orderBy, query } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Slider from '../components/Slider';
import { db } from '../firebase';

export default function Home() {
  const [offerlistings, setOfferListings] = useState(null)
  useEffect(() => {
    async function  fetchListings (){
      const listingsRef = collection(db, 'listings')
      const q = query(listingsRef, orderBy('timestamp', 'desc'), 
      limit(4))
      const querySnap = await getDoc(q)
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      });
      setOfferListings(listings);
     console.log(listings)
    }
    fetchListings();
  }, [])
  return (
    <div>
      <Slider />
    </div>
  )
}
