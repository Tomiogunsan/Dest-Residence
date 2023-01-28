import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from '../components/Slider';

export default function Home() {
  // offers
  const [offerListings, setOfferListings] = useState(null)
  useEffect(() => {
    async function fetchList
  }, []) 
  return (
    <div>
      <Slider />
    </div>
  );
}
