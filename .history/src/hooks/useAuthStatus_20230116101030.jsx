import React, { useEffect, useState } from 'react'

export default function useAuthStatus() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true)

    useEffect(()=> {
        
    })
  return (
    <div>useAuthStatus</div>
  )
}
