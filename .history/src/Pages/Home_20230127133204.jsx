import React from 'react';
import { useEffect } from 'react';
import Slider from '../components/Slider';

export default function Home() {
  useEffect(() => {
    async function  fetchListings (){
      const listingsRef = collection()
    }
    fetchListings()
  }, [])
  return (
    <div>
      <Slider />
    </div>
  )
}
