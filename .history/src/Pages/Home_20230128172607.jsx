import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from '../components/Slider';
import { db } from "../firebase";

export default function Home() {
  // offers
  const [offerListings, setOfferListings] = useState(null)
  useEffect(() => {
    async function fetchListings(){
        try {
          //get reference
          const listingsRef = collectiom(db, 'listings')
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
