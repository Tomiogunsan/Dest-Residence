import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {offerListings && offerListings.length > 0 && 
        (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6 font-semibold">Recent offers</h2>
            <Link to='/offers'>
              <p></p>
            </Link>
          </div>
        )} 
      </div>

    </div>
  );
}
