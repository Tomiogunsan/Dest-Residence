import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

export default function useAuthStatus() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatus] = useState(true)

    useEffect(()=> {
        const auth = getAuth()
    })
  return (
    <div>useAuthStatus</div>
  )
}
