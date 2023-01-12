import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/' element={<Home/>} />


      </Routes>
     </Router>

    </>
  );
}

export default App;
