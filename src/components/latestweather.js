
import FetchLondon from './API/FetchWeather/london'
import FetchBerlin from './API/FetchWeather/berlin'
import FetchNewYork from './API/FetchWeather/newyork'
import FetchParis from './API/FetchWeather/paris'
import CureentLocation from './API/FetchWeather/currentlocation'
import './API/FetchWeather/weatherstyles.css'

import FetchNews  from './API/fetchnews'
 function LatestWeather(){
    const locations = ['London', 'Berlin','New York', 'Paris']


    // const Wiget = ({location})=>{
    //     var FetchW;
    //     console.log("hey there")

    //     //instead of created 5 alternate returns statements 
    //     //im creating a single return statement that will call different child compenent depending on 
    //     //what city is passed into Wiget
  
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  


    return(
        <>
        <div className="latest-container"> 
            <div className='main'>
                <div className='title' >
                    <div className='intro'>
                        <h2 >Today Around The World</h2>    
                         <p> {utc}</p>
                    </div>
                    
                <div className='line-break'></div>
                </div>
                
                <div className="weather-container">
                    <CureentLocation  /> 
                    <FetchBerlin location= {'Berlin'} />          
                    <FetchParis location= {'Paris'} />                      
                    <FetchLondon location= {'London'} />
                    <FetchNewYork location= {'New York'} />
                </div>

                <FetchNews />
            </div>
        </div>
        </>
    )
}

export default LatestWeather;