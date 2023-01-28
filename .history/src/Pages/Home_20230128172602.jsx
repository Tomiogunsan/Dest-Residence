import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from '../components/Slider';

export default function Home() {
  // offers
  const [offerListings, setOfferListings] = useState(null)
  useEffect(() => {
    async function fetchListings(){
        try {
          //get reference
          const listingsRef = collection(db, 'listings')
        } catch (error){

        }
    }
    fetchListings()
  }, []) 
  return (
    <div>
      <Slider />
    </div>
  );
}
