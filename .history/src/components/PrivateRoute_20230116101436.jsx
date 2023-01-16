import React from 'react'
import { Outlet , Navigate} from 'react-router';

export default function PrivateRoute() {
    const {lo}
  return (
    loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
  )
}
