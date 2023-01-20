import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { db } from '../firebase'

export default function Listings() {
  const params = useParams()
  useEffect(()=>{
    async function fetchListing(){
      const docRef = do(db, 'listings', params.listingId)
    }
    fetchListing()
  }, [])
  return (
    <div>Listing</div>
  )
}
