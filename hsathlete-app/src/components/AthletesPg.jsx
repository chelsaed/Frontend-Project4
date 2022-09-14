import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function AthletesPg() {
    const [ athletes, setAthletes  ] = useState([])
  
      useEffect(() => {
        fetch('http://localhost:8000/highschoolathlete')
        .then( res => res.json())
        .then( athletes => {
          console.log(athletes)
          setAthletes(athletes)})
      }, [])
  
      console.log(athletes)
  
   return (
 
     <section className="container">
         {athletes.map(athlete =>{
             return(
         <Link to={`/athletedetails/${athlete._id}`} key={athlete._id}>
       <div className="athletepic">
              <div className="athlete-image">
             <img 
             src={athlete.image}
             alt={athlete.name}
             /> 
         </div>
         <div className="profiles">
         <h3>{athlete.name}</h3>
         </div>
         </div>
         </Link>           

             )
         })}
    </section>
  );
}

export default AthletesPg