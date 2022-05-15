import React from 'react'
import cars from '../cars.json'
import '../App.css'
// import material ui components here //
// Container, Paper, Chip //
import { useParams } from "react-router-dom";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Car = (props) => {
 const { id } = useParams()
 console.log(cars)
    return (
     <div id="centerContainer">
      <div id="container">
       <div id="CarName">{cars[id-1].Name}</div>
       <div id="chips">
         <Chip label={`id:${cars[id-1].id}`} />
         <Chip label={`Name: ${cars[id-1].Name}`} />
         <Chip label={`Miles_per_Gallon: ${cars[id-1].Miles_per_Gallon}`} />
         <Chip label={`Cylinders: ${cars[id-1].Cylinders}`} />
         <Chip label={`Displacement: ${cars[id-1].Displacement}`} />
         <Chip label={`HorsePower: ${cars[id-1].Horsepower}`} />
         <Chip label={`Weight_in_lbs: ${cars[id-1].Weight_in_lbs}`} />
         <Chip label={`Acceleration: ${cars[id-1].Acceleration}`} />
         <Chip label={`Year: ${cars[id-1].Year}`} />
         <Chip label={`Origin: ${cars[id-1].Origin}`} />
       </div>
      </div>
     </div>
    )
}

export default Car