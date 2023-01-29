import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

export default function Offers() {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchListings(){
      try{

      } catch(error){
        toast.error('')
      }
    }
    fetchListings()
  }, [])
  return (
    <div>

    </div>
  )
}
