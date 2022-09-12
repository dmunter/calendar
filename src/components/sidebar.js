import './styles/sidebarstyles.css'

import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Sidebar(){
    return(
        <body className='sidebar-container'><div class="area"></div>
        <nav class="main-menu">
      
        <div className = "icon-grid">
            <div className = 'profile-icon'>
                <a href="#">
                    <i class="fa faone fa-user fa-2x "></i>    
                    <div className='welcome-container'><h1 className="welcome">Welcome user!</h1></div>
                </a>
                
                
            </div>      
                
          
            <ul>
                <li class="has-subnav">
                    <Link to="/">
                        <i class="fa fa-home fa-4x"></i>
                        <span class="nav-text">
                            Calendar
                        </span>
                    </Link>
                    
                </li>
                <li class="has-subnav">
                    <Link to="/latestweather">
                    <i class="fa fa-list fa-2x"></i>
                    <span class="nav-text">
                        Latest
                    </span>
                    </Link>
                    
                </li>
            
                <li>
                    <Link to="/documentation">
                    <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            Documentation
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
        
    </nav>
    </body>
    );

}