import { collection, getDoc, limit, orderBy, query } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import Slider from '../components/Slider';
import { db } from '../firebase';

export default function Home() {
  useEffect(() => {
    async function  fetchListings (){
      const listingsRef = collection(db, 'listings')
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
      const querySnap = await getDoc(q)
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({})
      })
    }
    fetchListings()
  }, [])
  return (
    <div>
      <Slider />
    </div>
  )
}
