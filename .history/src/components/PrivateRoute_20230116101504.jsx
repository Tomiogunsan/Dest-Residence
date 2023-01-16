import React from 'react'
import { Outlet , Navigate} from 'react-router';

export default function PrivateRoute() {
    const {loggedIn, checkingStatus} = useAuth
  return (
    loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
  )
}
