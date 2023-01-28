import React from "react";
import { useState } from "react";
import Slider from '../components/Slider';

export default function Home() {
  // offers
  const [offerListings, setOfferListings] = useState() 
  return (
    <div>
      <Slider />
    </div>
  );
}
