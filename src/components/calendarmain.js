import './styles/calendarstyles.css'
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

//import FullCalendar from "@fullcalendar/react";
//import dayGridPlugin from "@fullcalendar/daygrid";
//import interactionPlugin from "@fullcalendar/interaction";
import React, { useState, useEffect } from 'react';

import { Data } from './data.js'


moment.locale("en-GB");
const localizer = momentLocalizer(moment);

var startDate = null;
var endDate = null



export default function Fullcalendar(){
    //Data contains sample events

    const [value, setValue] = useState(Data);
    
    //Truth values to determine wether pop up windows should be closed or open

    const [newModalIsOpen, setNewModalIsOpen] = useState(false);
    const [removeModalIsOpen, setRemoveModalIsOpen] = useState(false);

    //state to hold the currently selected event to be deleted
    const [selectedEvent, setElectedEvent] = useState(null)
    //once popup opens 
    const eventClick = () =>{
        //'input' element was created in the parent function 
        var title = document.getElementById('input').value
        if(title){
            setValue([
                //value keeps the existing events in the hook
                ...value,
                //add a new event. the name will be whatever the user type in the input box
                {
                    title: title,
                    start: startDate,
                    end: endDate,
                    
                }
            ])
        } else {
            closeModal()
            return;
        }       
        closeModal()
        
    }   
    //prompt on new event
    
    const onSelectSlot = ({start, end}) => {
        startDate = start;
        endDate = end;
        setNewModalIsOpen(true)    
    };
    
    const onSelectEvent = (event)=>{
        setElectedEvent(event)
        setRemoveModalIsOpen(true)
    }

    const closeModal = () => {
        setNewModalIsOpen(false)
        setRemoveModalIsOpen(false)
    }


    const deleteEvent = () => {
        console.log(selectedEvent.title)

        var name = selectedEvent.title
        setValue(current => 
            current.filter(values =>{
                return values.title !== name
            })
        )
        closeModal()
    }


    

    //This component needs to be attached to the DOM at render time. 
    //It should only be displayed when handlDataClick is called



    function RenderNewEventModal ()  {
        if(!newModalIsOpen){ return;}
        return(
        <div className='popup'>
            <div className='popup-container'> 
                <div> <h1 className='event-title'>Enter new Event</h1>
                    <form>
                        <input id = 'input'/>
                        <button className = 'btn-1' onClick={() => eventClick()}>Submit</button>                  
                        <button className = 'btn-1' onClick = {closeModal}>cancel</button>                      
                    </form>
                </div>
            </div>
        </div>    
        );
    }
    
    function RenderDeleteEventModal() {
        if(!removeModalIsOpen){ return;}
        return(
        <div className='popup'>
            <div className='popup-container'> 
                <div > <h1 className='event-title'> Delete event</h1>              
                    <button className = 'btn-1' onClick={deleteEvent}>Delete Event</button>                  
                    <button className = 'btn-1'onClick = {closeModal}>Cancel</button>                                  
                </div>
            </div>
        </div>    
        );
    }
    
    return(
    <div className="calendar-container">  
     <h1>Calendar </h1>
      <Calendar 
        onSelectSlot={onSelectSlot}
        onSelectEvent = {onSelectEvent}

       views={["day", "agenda", "work_week", "month"]}
       selectable
       localizer={localizer}
       defaultDate={new Date()}
       defaultView="month"
       style={{ height: "80vh" }}
       startAccessor="start"
       endAccessor="end"  

       events = {value}  

  

       />
    
      
    <RenderNewEventModal />
    <RenderDeleteEventModal/>
    
    </div>
    )
}