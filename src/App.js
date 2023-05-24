
import './App.css';
import { useState } from 'react';
function App() {

const [lat,setLat] =useState(0)
const [long,setLong] =useState(0)
const [hemisphere,setHemisphere] =useState("")
const [month,setMonth] =useState("")

function getCurrentLocation(){
  navigator.geolocation.getCurrentPosition((position)=>{
    let {latitude,longitude}=position.coords
    setLat (latitude)
    setLong(longitude)
    getHemisphere(latitude)
  })

  function getHemisphere(latitude){
    if(latitude<0){
      setHemisphere('Northern')
    }

    else if(latitude>0){
      setHemisphere('Southern')
    }

    else{
      setHemisphere('Equator')
    }
    let date =new Date()
    let currentMonth = date.getMonth()
    setMonth(currentMonth)
  }
}

  return (
    <div className="App">
         <h1>latitude : {lat}  longitude:{long}</h1>
         <h1>hemisphere: {hemisphere}</h1> 
         <h1>month: {month}</h1>  
         <button onClick={getCurrentLocation}>Get Current Location</button>  
    </div>
  );
}

export default App;
