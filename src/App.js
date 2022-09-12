import './custom.scss';
import './App.css';
import './custom.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Button, Alert, Breadcrumb}  from 'react-bootstrap';


// import FetchW from './components/API/FetchW'

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

//components within the sidebar
import Fullcalendar from './components/calendarmain';
import LatestWeather from "./components/latestweather"
import Documentation from "./components/documentation"

import Sidebar from "./components/sidebar";

function App() {
    
  const Header = () => {
    return (
      <>
        <Sidebar />
        <Outlet />
      </>
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Fullcalendar />} />
          <Route path="/latestweather" element={<LatestWeather />} />
          <Route path="/documentation" element={<Documentation />} />
        </Route>
      </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
