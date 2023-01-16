import React from 'react'
import { Outlet , Navigate} from 'react-router';

export default function PrivateRoute() {
    const {loggedIn, c}
  return (
    loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
  )
}
