import React from 'react'
import AthletesPg from './AthletesPg'


  function HomePg ({athletes}) {
    return (
      <div className="HomePg">
        {/* <header className="HomePg-header"> */}
          <h1>Home Page</h1>
        <p>This is a website used for High School recuiters to get infomation about current high school players seeking college recruitment. These high school athletes show passion and skill in their sport. Please browser through the athlete profiles to learn more about what these high school athletes have to offer.  </p>
          <AthletesPg athletes={athletes}/>
        
        {/* </header> */}

        
      </div>
    );
  } 
      
      
      


export default HomePg