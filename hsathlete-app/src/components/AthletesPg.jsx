import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom'

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
 
//     <section className="container">
//         {birds.map(bird =>{
//             return(
//         <Link to={`/details/${bird.id}`} key={bird.id}>
       <div className="card">
             {/* <div className="card-image">
             <img */}
        {/* //     src={bird.image}
        //     alt={bird.name}
        //     /> */}
         </div>
        // <div className="card-title">
        // <h3>{bird.name}</h3>
        // </div>
//         </div>
//         </Link>           

//             )
//         })}
//     </section>
  );
}

export default AthletesPg