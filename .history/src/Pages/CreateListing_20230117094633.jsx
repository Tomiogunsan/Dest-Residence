import React, {useState} from 'react'

export default function CreateListing() {
    const [formData, setFormData] = useState({
        type: 'rent',
        name: '',
    });
    const {type, name} = formData
    function onChange (){

    }
  return (
    <main className='max-w-md px-2 mx-auto' >
        <h1 className='text-3xl text-center mt-6 font-bold'>Create a Listing</h1>
        <form >
            <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
            <div className='flex'>
                <button type='button' id='type' value='sale' 
                onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
                hover:shadow-lg focus:shadow-lag active:shadow-lg transition duration-150 
                ease-in-out w-full ${ type === 'rent' ? 'bg-white text-black' : 'bg-blue-800 text-white'}`}> 
                    sell
                </button>
                <button type='button' id='type' value='sale' 
                onClick={onChange} className={`ml-6 px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
                hover:shadow-lg focus:shadow-lag active:shadow-lg transition duration-150 
                ease-in-out w-full ${ type === 'sale' ? 'bg-white text-black' : 'bg-blue-800 text-white'}`}> 
                    rent
                </button>
            </div>
            <p className='text-lg mt-6 font-semibold '>Name</p>
            <input type="text" id='name' value={name} onChange={onchange}
            placeholder='Name' maxLength={}
            className/>
        </form>
    </main>
  )
}
