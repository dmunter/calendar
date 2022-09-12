import { useState , useEffect} from 'react';
import React from 'react';

//fetch weather from 
const FetchW =({location})=> {

//create a STATE for every location

const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
const [data, setData] = useState({ city: "", tempurature: ""});



//create 
useEffect(() => {
    //create async function so we first fetch the location of the client
  const fetchData = async() => {
    navigator.geolocation.getCurrentPosition(function(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  });


  //console.log("Latitude is:", lat)
  //console.log("Longitude is:", long)

  ///http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=464074878672b929bf35fa6f57cedd37
  //connect to openweather api to receive an object of current weather detail from your longitude and latitude points provided from geolocation from above
  await fetch(`http://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&APPID=464074878672b929bf35fa6f57cedd37`)
 //await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=464074878672b929bf35fa6f57cedd37`)
  
  .then(response => response.json())
  .then(results => {
    setData( 
      {
        city: results.name,
        tempurature: results.main.temp_max
       
      }
    
      
    )
    console.log()
    console.log(data)
    //convert from Kelvin to Farnheit
    // const K = parseInt(results.main.temp)
    // const resul = 9/5*(K - 273.15) + 32;
    // console.log( Math.floor(resul))
  }).catch((e)=> console.log(e))
  
}
  fetchData();
    
}, [lat,long] ) //only re-render this function if state of lat or long changes

//let day = React.createElement('h2',  {}, 'My First React Code')

//now return the neccissary data to the Back to the DOM
return (
    // <div className = "day-forcast" >
    //     {(typeof data.main != 'undefined') ? (
    //     <h2>{data.main.temp_max}</h2>
    //   ): (
    //     <div><p>allow location access to view weather</p></div>
    //   )}
    // </div>


    
      typeof data.city != "" ? data.tempurature :  "allow location access"
    
)
}

export default FetchW