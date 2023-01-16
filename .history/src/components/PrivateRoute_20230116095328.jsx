import React from 'react'
import { Outlet , Navigate<Navigate} from 'react-router';

export default function PrivateRoute() {
    const loggedIn = false;
  return (
    loggedIn ? <Outlet /> : 
  )
}
