import React from 'react'
import { Outlet , } from 'react-router';

export default function PrivateRoute() {
    const loggedIn = false;
  return (
    loggedIn ? <Outlet /> : 
  )
}
