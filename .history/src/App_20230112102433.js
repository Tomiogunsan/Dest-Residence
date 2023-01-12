import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Profile/>} />
        <Route path='/' element={<Sih} />


      </Routes>
     </Router>

    </>
  );
}

export default App;
