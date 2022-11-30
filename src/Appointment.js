import React from 'react'
import './appointment.css'
function Appointment() {
  return (
    <div className='Book_appointment'>
        <form >
          <h1>Appointment Booking Section</h1>
            <input type="text" placeholder='Enter Username'/>
            <input type="email" placeholder='Enter Email'/>
            <input type="number" placeholder='Enter Phone number'/>
            <input type="text" placeholder='Request Specific Doctor'/>
            <input type="text" placeholder="Request Urgency "/>
        <input placeholder='Describe purpose of booking appointment'/>
         <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default Appointment