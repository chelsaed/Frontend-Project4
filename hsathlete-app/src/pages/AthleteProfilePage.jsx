import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const AthleteProfile = ({props}) => {
    
    const [athleteProfile, setAthleteProfile] = useState([])

    const {id} = useParams()
  
      useEffect(()=> {
        fetch(`http://localhost:8000/athleteprofile${id}`)
        .then((res) => res.json())
        .then((json) => setAthletesDetails(json))
        .catch(console.error)
      }, [])
        console.log(athleteProfile)

  return (
    <div className="AthleteProfile" key={athleteProfile?._id}>
        <h1>{athleteProfile?.name}</h1>
    
  
    <div>
    <h1>Athlete Profile</h1>

    <h2>{athleteProfile?.email}</h2>
    <h2>{athleteProfile?.height}</h2>
    <h2>{athleteProfile?.weight}</h2>
    <h2>{athleteProfile?.gradDate}</h2>
    <h2>{athleteProfile?.currentHS}</h2>
    <h2>{athleteProfile?.sport}</h2>
    <h2>{athleteProfile?.positionPlayed}</h2>


     </div>
   {/* <img src={athleteProfile?.image} alt={athletesDetails?.name}/> */}
    </div>
  )
}

export default AthleteProfile






















// import React from 'react'

// export const AthleteProfilePage = () => {
//   return (
//     <div>AthleteProfilePage</div>
//   )
// }
