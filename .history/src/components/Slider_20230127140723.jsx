import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {EffectFade,
Autoplay,
Navigation }
import Spinner from "../components/Spinner";
import { db } from '../firebase';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';

export default function Slider() {
    const [listings, setListings] = useState(null)
  const[loading, setLoading] = useState(true)
  useEffect(() => {
    async function  fetchListings (){
      const listingsRef = collection(db, 'listings')
      const q = query(listingsRef, orderBy('timestamp', 'desc'), 
      limit(4))
      const querySnap = await getDocs(q)
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      });
      setListings(listings);
     setLoading(false)
    }
    fetchListings();
  }, []);
  if(loading){
    return <Spinner/>;
  }
  if(listings.length === 0){
    return <></>
  }
  return (
    listings && 
    <>
    {listings.map((listings) => (
        <h1 key={listings.id}>{listings.data.imgUrls[0]}</h1>
    ))}
    </>
  )
}
