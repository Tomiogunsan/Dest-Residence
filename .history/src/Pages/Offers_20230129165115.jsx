import React, { useEffect } from 'react'

export default function Offers() {
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchListings(){
      try{

      } catch(error)
    }
    fetchListings()
  }, [])
  return (
    <div>

    </div>
  )
}
