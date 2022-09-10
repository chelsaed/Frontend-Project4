import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePg from './components/HomePg';



function App() {
  const [ athletes, setAthletes  ] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/highschoolathlete')
    .then( res => res.json())
    .then( athletes => setAthletes(athletes))
  }, [])
  
  console.log(athletes)
  
  const addToAthletes = (athlete) => {
     setAthletes([...athletes, athlete])
  }

  const updateAthleteState = (id) => {
      setAthletes(athletes.filter(athlete => athlete._id !== id))

  } 
  
  return(
   
      
      <Routes>
          <Route path='/' element={ <HomePg/>} />
          {/* // <Route path='/new-coffee' element={ <NewCoffee addCoffee={addToCoffee}  /> } />
          // <Route path='/coffee/edit/:id/' element={ <CoffeeEdit  setCoffees={setCoffees} /> } />
          // <Route path='/coffee/:id' element={ <CoffeeView coffees={coffees}/>} /> */}
      </Routes>

    
      
     
  );
}

export default App;
