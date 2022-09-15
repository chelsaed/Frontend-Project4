import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import HomePg from './components/HomePg';
import Athletedetails from './components/AthleteDetails';
import LoginPage from './pages/LoginPage';
import userService from './utils/userService';
import { useState, useEffect } from 'react'
import SignupForm from './pages/SignupForm';





function App() {
  const setState = useState([]);

  let handleLogout = () => {
    userService.logout();
    setState({ user: null });
  }

  let handleSignupOrLogin = () => {
    setState(userService.getUser());
  }

  return (
    <div className="App">
      
        <h1>
          Welcome to High School Athletes
          
      </h1>

      <p>This is a website used for High School recuiters to get infomation about current high school players seeking college recruitment. These high school athletes show passion and skill in their sport. Please browser through the athlete profiles to learn more about what these high school athletes have to offer.  </p>
   
      
      <Link to={'/HomePg'}>Browse Athletes</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to={'/signup'}>Athlete Sign Up</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to={'/login'}>Athlete Login</Link>
        <Routes>
          
          <Route path='/HomePg' element={<HomePg />} />
          <Route path="/athletedetails/:id" element={ <Athletedetails/>}/>
          <Route path='/login' element={<LoginPage handleSignupOrLogin={handleSignupOrLogin}/>}/>
          <Route path='/signup' element={<SignupForm handleSignupOrLogin={handleSignupOrLogin}/>}/>    
          <Route path= '/logout' element={<LoginPage handleLogout={handleLogout}/>}/>

         
        </Routes>

    </div>
  );
}
export default App;