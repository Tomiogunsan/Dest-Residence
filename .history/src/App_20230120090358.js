import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import ForgotPassword from './Pages/ForgotPassword';
import Home from './Pages/Home';
import Offers from './Pages/Offers';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import CreateListing from './Pages/CreateListing';
import EditListing from './Pages/EditListing';


function App() {
  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile/>} />
        </Route>
        
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/offers' element={<Offers/>} />
        
        <Route path='/create-listing' element={<PrivateRoute />}>
        <Route path='/create-listing' element={<CreateListing/>} />
        </Route>

        <Route path='/edit-listing' element={<PrivateRoute />}>
        <Route path='/edit-listing/:listing' element={<EditListing/>} />
        </Route>

      </Routes>
     </Router>
     <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
/>

    </>
  );
}

export default App;
