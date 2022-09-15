import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import HomePg from './components/HomePg';
import Athletedetails from './components/AthleteDetails';





function App() {



  return (
    <div className="App">
      
        <h1>
          Welcome to High School Athletes
          
      </h1>

      <p>This is a website used for High School recuiters to get infomation about current high school players seeking college recruitment. These high school athletes show passion and skill in their sport. Please browser through the athlete profiles to learn more about what these high school athletes have to offer.  </p>
      

      <Link to={'/HomePg'}>Browse Athletes</Link>
        <Routes>

        
          <Route path='/HomePg' element={<HomePg />} />
          <Route path="/athletedetails/:id" element={ <Athletedetails/>}/>


         
        </Routes>

    </div>
  );
}
export default App;