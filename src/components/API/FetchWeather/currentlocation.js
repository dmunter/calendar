import { useState, useEffect } from "react"
import './weatherstyles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCloud, faS } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";

const FetchNewYork = ()=> {
    const [data, setData] = useState({ city: "--", tempurature: "--", weather: "--"});
    const [weatherIcon, setWeatherIcon] = useState([])
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [location, setLocation] = useState("*Enable location")

   // var lat=42.76167;
    //var long = -98.72611 ;
    
    
    //New york cordinates 
    //40.7128° N, 74.0060° W

        useEffect(() =>  {

        async function makeRequest() {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude)
                setLong( position.coords.longitude)
                });

        await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&APPID=` + process.env.REACT_APP_WEATHER_APIV2 )
        .then(response => response.json())
        .then(results =>{
            //console.log(results)
            var temp = parseInt(results.main.temp)
            const Fahrenheit = Math.floor(9/5*(temp - 273.15) + 32); //convert from kelvin to farenheight
            const overcast = results.weather[0].main
            //results is an object of all weather information in the selected cordinates
            //however we only want 3 of the key value pairs
            setData({
                city: results.name, 
                tempurature: Fahrenheit,
                weather: results.weather[0].main
            })
            setWeatherIcon(()=>{
                if(overcast == 'Cloud' || overcast == 'Clouds') return faCloud
                if(overcast == 'Rain' || overcast == 'Raining') return faCloudRain
                if(overcast == 'Snow' || overcast == 'Snowing') return faSnowflake
                
                //else return sunny icon
                return faSun
            })
            setLocation(results.name)
            console.log(results.name + " " + Fahrenheit + ":  " + overcast)
        })
    
    }
    makeRequest()
    //The api request will change whenever the second parameter we passed in the function changes
    //long is not ment to change
    } , long)
  
    
 
    return(
       // typeof data.city != "" ? data.tempurature :  "allow location access"
        
        //'hello there'



        <div class="widget">
            <div class="left-panel panel">
                <div class="date">
                   
                </div>
                <div class="city">
                    {location } 
                </div>
                <div class="temp">
               <br></br>
                <p> <FontAwesomeIcon icon={weatherIcon} />  {data.tempurature} &deg; </p> 
                
                
                </div>
            </div>
        <div class="right-panel panel">
              
        </div>

    </div>
    )

}
export default FetchNewYork