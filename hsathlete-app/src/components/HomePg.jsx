import React from 'react'
import AthletesPg from './AthletesPg';



  function HomePg ({athletes}) {
    return (
      <div className="HomePg">
        
          <h1>High School Athletes</h1>
          <AthletesPg athletes={athletes}/>
       
          {/* <AthletesPg athletes={athletes}/> */}
        
    

        
      </div>
    );
  } 
      
      
      


export default HomePg