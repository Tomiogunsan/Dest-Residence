import React, { useEffect } from 'react'
import { useParams } from 'react-router'

export default function Listings() {
  const params = useParams()
  useEffect(()=>{
    async function fetchListing(){
      const docRef = doc(db, 'listings', params.listing)
    }
    fetchListing()
  }, [])
  return (
    <div>Listing</div>
  )
}
