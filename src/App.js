import React from 'react'
import "./App.css"
import Header from "./Header"
import Sidebar from './Sidebar'
import Datagrid from './DataGrid'
import Login from './Login'
import Register from './Register'
import Col1 from './Col1'
// import Homepage from "./Homepage"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import "./container.css"
import Nutrition from "./Nutrition"
import Stats from './Stats'
import Appointment  from "./Appointment"
function  App() {
  return (

     <div className='app'>
       
       {/* <Dashboard /> */}
       <div className='Header'>
        <Header />
        </div>
       <div className='Container'>
            <div className='Sidebar'>
              <Sidebar />
            </div>
            <div className='Content'>
              <Stats/>
              <Appointment/>
              <Login />
              <Col1 />
              <Datagrid />
              <Register/>
            </div>
    </div>  
      // </div>
   )
}

export default App