import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import HomePg from './components/HomePg';



function App() {



  return (
    <div className="App">
      
        <h1>
          Welcome to High School Athletes
          
      </h1>
      

      <Link to={'/HomePg'}>Home</Link>
        <Routes>


          <Route path='/homepg' element={<HomePg />} />

          {/* /* /* like an attribute data request = blank */
    /* // <Route path='/new-coffee' element={ <NewCoffee addCoffee={addToCoffee}  /> } />
    // <Route path='/coffee/edit/:id/' element={ <CoffeeEdit  setCoffees={setCoffees} /> } />
    // <Route path='/coffee/:id' element={ <CoffeeView coffees={coffees}/>} />  */ }


          {/* <Route path="/" element={ <Birds />} />
    <Route path="/details/:id" element={ <BirdDetails/>}/> */}
        </Routes>

    </div>
  );
}
export default App;
