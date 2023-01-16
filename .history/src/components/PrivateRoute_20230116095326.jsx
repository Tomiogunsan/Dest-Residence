import React from 'react'
import { Outlet , Navigate<N} from 'react-router';

export default function PrivateRoute() {
    const loggedIn = false;
  return (
    loggedIn ? <Outlet /> : 
  )
}
