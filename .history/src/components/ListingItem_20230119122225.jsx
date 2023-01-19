import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom';
import {MdLocationOn} from 'react-icons/md'

export default function ListingItem({listing, id}) {
    
  return (
    <li>
       <Link to={`/category/${listing.type}/${id}`}>
        <img src={listing.imgUrls[0]} alt="" />
        <Moment fromNow>
            {listing.timestamp?.toDate()}
        </Moment>
        <div className="">
            <div>
                <MdLocationOn />
                <p>{listing.address}</p>
            </div>
            <p>{listing.name}</p>
            <p>${listing.offer ? listing.discountedPrice : listing}</p>
        </div>
       </Link>

    </li>
  )
}
