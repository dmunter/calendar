import { useState, useEffect } from "react"
import './weatherstyles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCloud, faS } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";

const FetchNewYork = ({location})=> {
    const [data, setData] = useState({ city: "--", tempurature: "--", weather: "--"});
    const [weatherIcon, setWeatherIcon] = useState([])

    var date = new Date(); 
    var time = (`${date.getUTCHours()} : ${date.getUTCMinutes()}`) 
    console.log(time)

    //Berlin cordinates 
    //(52.520008, 13.404954)
    const lat = "52.520008"
    const long = "13.404954"

    useEffect( () =>{

    fetch(`http://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&APPID=464074878672b929bf35fa6f57cedd37`)
    .then(response => response.json())
    .then(results =>{
        
        var temp = parseInt(results.main.temp)
        const Fahrenheit = Math.floor(9/5*(temp - 273.15) + 32); //convert from kelvin to farenheight
        const overcast = results.weather[0].main //this is used to determined what icon should show next to the tempurature
        //results is an object of all weather information in the selected cordinates
        //however we only want 3 of the key value pairs
        console.log(results.name + " " + Fahrenheit + ":  " + overcast)
        setData({
            city: results.name, 
            tempurature: Fahrenheit,
            weather: overcast
        })
        setWeatherIcon(()=>{
            if(overcast == 'Cloud' || overcast == 'Clouds') return faCloud
            if(overcast == 'Rain' || overcast == 'Raining') return faCloudRain
            if(overcast == 'Snow' || overcast == 'Snowing') return faSnowflake
            
                
            //else return sunny icon
            return faSun
        })
        })

    }, lat ,long 
    )

    return(
       // typeof data.city != "" ? data.tempurature :  "allow location access"

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