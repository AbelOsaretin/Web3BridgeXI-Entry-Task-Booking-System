import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {Desk} from "./Components/Desk";
import {BookingForm} from "./Components/BookingForm";



const initialDesks = [
  { id: 1, type: 'individual', booked: false }
]

function App() {
  const [desks, setDesks] = useState(initialDesks);
  const handleBooking = (deskId, hours, tier) => {
    const updatedDesks = desks.map(desk =>
      desk.id === deskId ? { ...desk, booked: true } : desk
    );
    setDesks(updatedDesks);


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
