import { collection, limit, query } from 'firebase/firestore';
import React from 'react';
import { useEffect } from 'react';
import Slider from '../components/Slider';
import { db } from '../firebase';

export default function Home() {
  useEffect(() => {
    async function  fetchListings (){
      const listingsRef = collection(db, 'listings')
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
    }
    fetchListings()
  }, [])
  return (
    <div>
      <Slider />
    </div>
  )
}
