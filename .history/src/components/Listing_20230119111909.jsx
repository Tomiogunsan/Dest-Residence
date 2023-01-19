import React from 'react'

export default function Listing() {
  return (
    <div>
        <h2 className='text-2xl text-center font-semibold '>
            My Listings
        </h2>
        <ul>
            {listings.map((listing) =>(
                <ListingItem
                key={listing.id}
                id={listing.id}
                listing={listing.data}/>
            ))}
        </ul>
    </div>
  )
}
