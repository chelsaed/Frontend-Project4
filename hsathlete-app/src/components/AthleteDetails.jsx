import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


const AthletesContainer  = styled.div`
    background-color: dodgerblue;
    border-radius: 10px;
    width: 30vw;
    min-width: 200px;
    div {
        padding: 10px;
        margin:0;
        padding-bottom: 0px;
    }
    img {
      width  : 100% ;
      border-radius: inherit;
    }



const AthleteDetails = ({props}) => {
    
    const [athletesDeatils, setAthletesDetails] = useState(null)

    const {id} = useParams()
  
      useEffect(()=> {
        fetch(`http://localhost:8000/highschoolathlete/${id}`)
        .then((res) => res.json())
        .then((json) => setAthletesDetails(json))
        .catch(console.error)
      }, [])
  
      console.log(athletes)

  return (
    <AthletesContainer key={athletes._id}>
        <h1>{athletes.name}</h1>
    <div>
    <h1>Athlete Details</h1>

    <h2>{athletes.sport}</h2>
    <h2>{athletes.position}</h2>
    <h2>{athletes.height}</h2>
    <h2>{athletes.weight}</h2>

    </div>
    <img src={athletes.image} alt={athletes.name}/>
    </AthletesContainer>
  )
 }


export default AthleteDetails