import React from 'react'

export default function CreateListing() {
    function onChange (){

    }
  return (
    <main className='max-w-md px-2 mx-auto' >
        <h1 className='text-3xl text-center mt-6 font-bold'>Create a Listing</h1>
        <form >
            <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
            <div className=''>
                <button type='button' id='type' value='sale' 
                onClick={onChange} className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
                hover:shadow-lg focus:shadow-lag active:shadow-lg transiton`}> 
                    sell
                </button>
            </div>
        </form>
    </main>
  )
}
