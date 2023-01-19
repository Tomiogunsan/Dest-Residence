import React from 'react'

export default function Listings(props) {
  return (
    <div>
        <h2 className='text-2xl text-center font-semibold '>
            My Listings
        </h2>
        <ul>
            {listings.map(())}
        </ul>
    </div>
  )
}
