import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import { useNavigate } from 'react-router'
import { db } from '../firebase'
import ListingItem from './ListingItem'

export default function Listing({listings}) {
    const navigate = useNavigate()
    async function onDelete(listingID){
        if(window.confirm('Are you sure you want to delete?')){
            await deleteDoc(doc(db, 'listings', listingID))
            const updatedListings = listings.filter((listing) => listing.id !)
        }
    }
    function onEdit(listingID){
        navigate(`/edit-listing/${listingID}`)
    }
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
                listing={listing.data}
                onDelete={() => onDelete(listing.id) }
                onEdit={() => onEdit(listing.id) }
                />
                
            ))}
        </ul>
    </div>
  )
}
