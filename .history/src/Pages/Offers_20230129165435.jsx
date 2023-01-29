import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import {collection} from 'firebase/firestore'
import { db } from "../firebase";


export default function Offers() {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchListings(){
      try{
        const listingRef = collection(db, 'listings')
        const
      } catch(error){
        toast.error('Could not fetch listing')
      }
    }
    fetchListings()
  }, [])
  return (
    <div>

    </div>
  )
}
