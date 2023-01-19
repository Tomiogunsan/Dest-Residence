import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom';
import {MdLocationOn} from 'react-icons/md'

export default function ListingItem({listing, id}) {
    
  return (
    <li className='bg-white flex  
    flex-col justify-between items-center
    shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow-150'>
       <Link to={`/category/${listing.type}/${id}`}>
        <img className='h-[170px] w-full object-cover hover:scale-150 transition-scale
        ' src={listing.imgUrls[0]} alt="" />
        <Moment fromNow>
            {listing.timestamp?.toDate()}
        </Moment>
        <div className="">
            <div>
                <MdLocationOn />
                <p>{listing.address}</p>
            </div>
            <p>{listing.name}</p>
            <p>${listing.offer ? 
            listing.discountedPrice.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : listing.regularPrice.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            {listing.type === 'rent' && '/ month'}
            </p>
            <div>
                <div>
                    <p>{listing.bedrooms > 1 ? `${listing.bedrooms} Beds`:
                    '1 Bed'}</p>
                </div>
                <div>
                    <p>{listing.bathrooms > 1 ? `${listing.bathrooms} Baths`:
                    '1 Bath'}</p>
                </div>
            </div>
        </div>
       </Link>

    </li>
  )
}
