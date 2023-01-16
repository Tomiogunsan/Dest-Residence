import React from 'react'
import { Outlet , Navi} from 'react-router';

export default function PrivateRoute() {
    const loggedIn = false;
  return (
    loggedIn ? <Outlet /> : 
  )
}
