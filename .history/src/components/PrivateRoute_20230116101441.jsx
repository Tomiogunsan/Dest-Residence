import React from 'react'
import { Outlet , Navigate} from 'react-router';

export default function PrivateRoute() {
    const {loggedIn, che}
  return (
    loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
  )
}
