import React from 'react'
import ListingItem from './ListingItem'

export default function Listing(props) {
    const {listings} = props
  return (
    <div>
        
        <h2 className='text-2xl text-center font-semibold '>
            My Listings
        </h2>
        <ul>
            {listings.map((listing) =>(
                <ListingItem 
                key={listing.id}
                />
            ))}
        </ul>

    </div>
  )
}
