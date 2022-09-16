import './styles/documentationstyles.css'
//import fontawesome from '@fortawesome/fontawesome'
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';

//import{library, dom } from '@fortawesome/fontawesome-svg-core';
//import{fab} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons' 


import MyImage from './images/pic1.png';

function Documentation(){

    return(
        <div className='main-doc'> 
            <header className='header'>
                <div className='name-and-icons'> 
                    <div><h1>&lt;Drew Munter /&gt;</h1> </div> 
                    <div className = 'icon-box'>
                    <div><a href="https://www.linkedin.com/in/drew-munter-841013202/" target = "_blank"><FontAwesomeIcon icon={faLinkedin}size = 'xl' color='black'  /></a></div>
                    <div><a href="https://github.com/dmunter" target = "_blank"><FontAwesomeIcon icon={faGithub} size = 'xl' color='black' /></a></div>
                    </div>
                </div>

                

            </header>

            <div className='starting-body'>
                <h2>
                This is goal of this project is to create a multiple-page application
                that uses React-Big-Calendar module library. Although it took many tools to create 
                this web page,
                this documenation will only cover the basic to get started with React-Big-Calendar.
                </h2>

                <h2>
                I will also demonstrate proper environment set up and walk through how I used
                React routing to configure Routes and Navigate with Links to connect pages.               
                </h2>

                <h2>
                    This guide will assume that you already know the basics to React
                </h2>
                
                <p>Last updated 9/13/2022</p>
            </div>
                <div >
                    <img className='showcase-img' src={require('./images/showcase.jpg')} />
                </div>
            <div>
                <h3>Getting Started </h3>
                <br></br>
                <h1>Node</h1>
            </div>
                

            <div>
                <p>To build our React application, we need a run-time environment called Node. It is mainly used to execute JavaScript code.</p>
                <p>To download it, go to <a href='https://nodejs.org/en/'>https://nodejs.org/en/.</a></p>
                <p>You'll also need npm, which is a package manager built on Node. You can use it to install packages for your JavaScript apps. Fortunately, it comes with Node, so you don't need to download it separately.</p>
                <p>Once both of them are finished, open your terminal or command prompt and type `node -v` This checks your current version of node</p >
            </div>

            <div className="Creating-a-React-App"></div>
            <div><h1>Creating a React App</h1></div>
            <div><p> To Create our react application, type the following.  Make sure you are in the correct working directory.  </p></div>
            <div> <span className='installs'> npx create-react-app &lt; Your app name&gt; </span></div>
            <div><p>The default React project environment should look like this after your packages are installed</p></div>
            <div><img src={require('./images/pic1.png')}/></div>
            <div><p>Once Packages are done installing go into the project folder directory and type `npm start` </p></div>
            <div><p>Your React application should launch into your default browser on port 3000 and should look similar to this</p></div>
            <div><img src={require('./images/pic2.jpg')}></img></div>
            <div><p>I usually delete all files that contain unnecessary code for convenience and easier readability. 
As well as deleting the example that React gave us in our app.js file </p></div>
            <div><h1>Routing</h1></div>
            <div>Begin by installing </div>
            <div><span className='installs'> npm install --save react-router-dom </span></div>
            <div> <p>When working with React Router your web pages are components and requesting a specific webpage is determined by the Page URL. When deciding on what page to render the router will pair each component with the URL.</p></div>
            <div><p>All of my components will be located in a designated components folder.</p></div>
            <div className="installs">
                <span>
                    src/
                    <br></br>
                    -app.js
                    <br></br>
                    -header.js
                    <br></br>
                    components/
                    <br/>
                    
                    <span className='indent'> -sidebar.js</span>
                    <br/>
                    <span className='indent'>-calendarmain.js</span>
                    <br></br>
                    <span className='indent'>-latestweather.js</span>
                    <br></br>
                    <span className='indent'>--documentation.js</span>
                    
                </span>            
            </div>
            <div><p>Our app.js file will reference all the children components. </p></div>
            <div><p>In order to establish a hierarchy of parent/children components will have to make use of three very important react-router features</p></div>
            <div><p>Import the following into app.js </p></div>
            <div><img src={require('./images/pic3.jpg')}></img></div>
            <div><p>Now lets check out the use case for these 4 imports</p></div>
            <div><img src={require('./images/pic4.jpg')}></img></div>
            <div><p>React Primary components includes  &lt;HashRouter&gt; and  &lt;Routes&gt; these are standard navigation components or can be thought of as “route changers”  These two will be used as parent components to the wrap children routes. Since I plan to host with github pages Its required that is use HashRouter as opposed to BrowserRouter I won’t be going into detail about  &lt;HashRouter&gt; and  &lt;Routes&gt; but if you’d like to learn more you can visit here. <a href='https://v5.reactrouter.com/web/guides/quick-start'> https://v5.reactrouter.com/web/guides/quick-start</a> </p></div>
            <div><p>Our Header will be a parent of whatever children components we decide to wrap within it. In this case, I have three separate pages and a Header(which is just a sidebar containing <span className='code'>links</span> to its children). It is necessary for the sidebar to be rendered on every page. Thus the user will be able to navigate accordingly. </p></div>
            <div><p>Thanks React Router v6. `&lt;Outlet&gt;` element is used as a placeholder. In this case an `&lt;Outlet&gt;` enables the Header component to render its child routes. Thus the `&lt;Outlet&gt;` element will render either a `&lt;Fullcalendar&gt;`, `&lt;Latestweather&gt;`, or `&lt;Documentation&gt;` element depending on the current location.</p></div>
            <div><h1>Calendar</h1></div>
            <div><p>Install React big calendar </p></div>
            <div className="installs">npm install -–save react-big-calendar </div>
            <div><p>In the file where we keep our Fullcalendar component ( in my case I named it calendarmain.js)  can begin to create what will be our main page. </p></div>
            <div><img src = {require('./images/pic5.jpg')}/></div>
            <div><p>`react-big-calendar` includes three options for handling the date formatting and culture localization, depending on your preference of DateTime libraries. You can use either the Moment.js, Globalize.js or date-fns localizers. I will be using momementLocalizer</p></div>
            <div><img src = {require('./images/pic6.png')}/></div>
            <div><p>Once react-big-calendar is downloaded and installed we can begin customizing </p></div>
            <div><img src = {require('./images/pic7.jpg')}/></div>
            <div><p>I also made my own css file specifically for changing the calendar styles. This is optional but strongly encouraged to add that unique flavor to make the project more personalized. </p></div>
            <div><img src = {require('./images/pic8.jpg')}/></div>
            <div><p>Your browser should now look similar to  this </p></div>
            <div><img src = {require('./images/pic9.jpg')}/></div>
            <div><h1>Adding example events to Calendar</h1></div>
            <div><p>Now we will need to create a hook to hold the events that we want to add to our calendar. For demonstration purposes, i will create a JSON object file that holds the information of a few random events that we may have on our calendar. These Data will then be set to the initial state of a hook that holds every event that will be added or deleted from our calendar later on in the project. </p></div>
            <div><img className='data-img' src = {require('./images/pic10.jpg')}/></div>
            <div><p>Import this file back into our calendarmain.js </p></div>
            <div><img src = {require('./images/pic11.jpg')}/></div>
            <div><p>Now to get this data into our calendar we need to understand how state management work within react (for more information on hooks visit <a href='https://reactjs.org/docs/hooks-intro.html'>https://reactjs.org/docs/hooks-intro.html)</a>  We will be using hooks to update the state of the calendar.</p></div>
            <div><p>Initialize the state with the following in our calendarmain.js file </p></div>
            <div><img src = {require('./images/pic12.jpg')}/></div>
            <div><p>Then assign `value` to the variable `events` in our Calendar component </p></div>
            <div><img src = {require('./images/pic13.jpg')}/></div>
            <div><p>Now our calendar should be filled with miscellaneous events to fill in empty days. </p></div>
            <div><h1>Adding new events</h1></div>
            <div><p>Let’s create two new functions that will be used to create a new event or delete an existing event.  </p></div>
            <div><p>These two functions will create a pop-up window with a few buttons to add or delete events. We don’t want the functions to display the  pop-up window when the page initially renders so we will create a boolean state named `newModelIsOpen` and `removeModalIsOpen`. Set values to initially be false.</p></div>
            <div><img src = {require('./images/pic14.jpg')}/></div>
            <div><p>Create two possible return values depending on the state of the hook we just created.  </p></div>
            <div><img  src = {require('./images/pic15.jpg')}/></div>
            <div><p>These two newly created functions must be mounted onto the DOM. To do that we must reference in the return statement of our parent function. </p></div>
            <div><p>The return statement should now look like this</p></div>
            <div><img src = {require('./images/pic16.jpg')}/></div>
            <div><p>Remember, these two function return nothing until we update the states of <span className='code'>newModalIsOpen</span> or <span className='code'>removeModalIsOpen</span> because we return nothing unless the state is <span className='code'>true</span> (seen from the previous ). Nothing has changed yet. </p></div>
            <div><p>Now we need a way to toggle <span className='code'>RenderNewEventModal</span> and <span className='code'>RenderDeleteEventModal</span>  </p></div>
            <div><p>Add <span className='code'>onSelectSlot</span> and <span className='code'>onSelectEvent</span> classes to our calendar. These two new keywords will execute some javascript when an empty calendar day is selected or when an existing event is selected, respectively. These selections will then run corresponding functions to update the state of the boolean hooks that determine whether to display the window that adds or delete an event.  </p></div>
            <div><img src = {require('./images/pic17.jpg')}/></div>
            <div><p>I named my function the same as the event handler not to be confused.</p></div>
            <div><img src = {require('./images/pic18.jpg')}/></div>
            <div><p><span className='code'>startDate</span> and <span className='code'>endDate</span>are global variables I created, that will determine time slots for our new event.</p></div>
            <div><p>Thus, each function will update the corresponding state when selected. </p></div>
            <div><p>Let’s just focus on <span className='code'>onSelectslot</span> which we want to create a new event.
            The function we created early will now return the JSX that contains our pop-up window.</p></div>
            <div><img src = {require('./images/pic19.jpg')}/></div>
            <div><p>Now, clicking and empty date should trigger the event handler that creates the following window. I added some styling to the pop up window within a CSS file.  </p></div>
            <div><img src = {require('./images/pic20.jpg')}/></div>
            <div><p>We still need to create <span className='code'>eventClicked</span> and <span className='code'>closeModal</span> functions that are handled when the buttons in the pop up modal are clicked.  (functions seen in the above image)</p></div>
            <div><p><span className='code'>eventClicked</span> Should take the input the user typed in the input box and update the current events with the new event. Then we should call a function that closes the modal. If there is nothing inside the input form, just close the modal.</p></div>
            <div><p>This is what it should look like</p></div>
            <div><img src = {require('./images/pic21.jpg')}/></div>
            <div><p>Remember those global variables we created earlier? Those come in handy when we determine where events are to be scheduled on the calendar.</p></div>
            <div><p>I know my code structure is starting to get a little jumbled but hang in there. So now you're asking where <span className='code'>closeModal()</span> leads us. </p></div>
            <div><p>Simply change the state of our hooks that determine the return values of the functions <span className='code'>RenderNewEvenetModal</span> and <span className='code'>RenderDeleteEventModal</span></p></div>
            <div><img src = {require('./images/pic22.jpg')}/></div>
            <div><p>Now let’s jump back to the pop-up window that should delete an event. </p></div>

            <div><h1>Deleting Event</h1></div>
            <div><img src = {require('./images/pic23.jpg')}/></div>
            <div><p>On the occurrence that Delete Event is clicked, it should be apparent, we currently have no way of knowing what the currently selected event is. We need to find the selected event within our Data and remove it.  This is done by filtering through all the values in our data. </p></div>
            <div><p>But first, in order to know what event was selected to be removed. We need to add another state that holds the selected event. </p></div>
            <div><img src = {require('./images/pic24.jpg')}/></div>
            <div><p>We can easily set the state of  <span className='code'>selectedEvent</span> by updating it here </p></div>
            <div><img src = {require('./images/pic25.jpg')}/></div>
            <div><p>Now we can just access the most recent selected event when we want to delete something. 
            A better practice would be to get the event by the ID rather than the title. 
            <div><img src = {require('./images/pic26.jpg')}/></div>

            <div><p>*It’s worth mentioning this guide is more of a rough outline to demonstrate my process, as opposed to a teaching example. </p></div>
 </p></div>
        </div>
    )
}

export default Documentation;


//references
//https://isotropic.co/react-multiple-pages/