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
   
  );
}

export default App;
