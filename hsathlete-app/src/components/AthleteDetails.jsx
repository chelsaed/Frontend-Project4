import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./AthleteDetails.css"


const AthleteDetails = ({props}) => {
    
    const [athletesDetails, setAthletesDetails] = useState([])

    const {id} = useParams()
  
      useEffect(()=> {
        fetch(`http://localhost:8000/highschoolathlete/${id}`)
        .then((res) => res.json())
        .then((json) => setAthletesDetails(json))
        .catch(console.error)
      }, [])
        console.log(athletesDetails)

  return (
    <div className="AthleteDetails" key={athletesDetails?._id}>
        <h1>{athletesDetails?.name}</h1>
    
  
    <div>
    <h1>Athlete Details</h1>

    <h2>{athletesDetails?.sport}</h2>
    <h2>{athletesDetails?.position}</h2>
    <h2>{athletesDetails?.height}</h2>
    <h2>{athletesDetails?.weight}</h2>

    </div>
    <img src={athletesDetails?.image} alt={athletesDetails?.name}/>
    </div>
  )
}

export default AthleteDetails