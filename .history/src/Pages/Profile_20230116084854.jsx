import React, {useSy} from 'react'

export default function Profile() {
  return (
    <>
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold '>My Profile</h1>
      <div>
        <form>
          {/* Name Input */}
          <input type="text" id='name' value={name}/>
        </form>
      </div>
    </section>
    </>
  )
}
