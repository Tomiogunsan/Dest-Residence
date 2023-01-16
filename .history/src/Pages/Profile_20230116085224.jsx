import React, {useState} from 'react'

export default function Profile() {
  const [formData, setFormData] = useState({
    name: 'Tomi',
    email: 'tomiafolayan@gmail.com',
  })

  const {name, email} = formData
  return (
    <>
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold '>My Profile</h1>
      <div>
        <form>
          {/* Name Input */}
          <input type="text" id='name' value={name} disabled className='w-full px-4
          py-2 text-xl text-gray-700 bg-white border border-gray-300 '/>
        </form>
      </div>
    </section>
    </>
  )
}
