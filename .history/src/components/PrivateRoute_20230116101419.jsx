import React from 'react'
import { Outlet , Navigate} from 'react-router';

export default function PrivateRoute() {
    const l[oggedIn = false;]
  return (
    loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
  )
}
