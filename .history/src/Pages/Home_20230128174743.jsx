import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
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
          const listingsRef = collection(db, 'listings')
          // create the query
          const q = query(listingsRef, where('offer', '==', true)
          , orderBy('timestamp', 'desc'), limit(4));
          // execte the query
          const querySnap = await getDocs(q)
          const listings = [];
          querySnap.forEach((doc) => {
            return listings.push(
              {
                id: doc.id,
                data: doc.data()
              }
            )
          })
          setOfferListings(listings)
          console.log(listings);
        } catch (error){
          console.log(error)
        }
    }
    fetchListings()
  }, []) 
  return (
    <div>
      <Slider />
      <div className="max">
        {offerListings && offerListings.length > 0 && 
        (
          <div>
            <h2>Recent offers</h2>
          </div>
        )} 
      </div>

    </div>
  );
}
