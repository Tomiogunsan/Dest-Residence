import React from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import ListingItem from './ListingItem'

export default function Listing({listings}) {
  return (
    <div>
        <h2 className='text-2xl text-center font-semibold mb-6'>
            My Listings
        </h2>
        <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
        2xl-grid-cols-5 mt-6 mb-6 '>
            {listings?.map((listing) =>(
                <ListingItem
                key={listing.id}
                id={listing.id}
                listing={listing.data}/>
                MdOutlineDelete={() =>onDe }
            ))}
        </ul>
    </div>
  )
}
