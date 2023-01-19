import React from 'react'
import ListingItem from './ListingItem'

export default function Listing({listings}) {
  return (
    <div>
        <h2 className='text-2xl text-center font-semibold '>
            My Listings
        </h2>
        <ul className='sm:grid sm:grid-cols-2'>
            {listings?.map((listing) =>(
                <ListingItem
                key={listing.id}
                id={listing.id}
                listing={listing.data}/>
            ))}
        </ul>
    </div>
  )
}
