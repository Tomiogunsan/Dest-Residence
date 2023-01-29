import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

export default function Offers() {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchListings(){
      try{
        const listingRef 
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
