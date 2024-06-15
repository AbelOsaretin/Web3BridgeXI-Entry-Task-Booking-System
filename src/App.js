import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Desk } from "./Components/Desk";
import { BookingForm } from "./Components/BookingForm";
import { Dashboard } from "./Components/Dashboard";

// const initialDesks = [
//   { id: 1, type: "individual", booked: false },
//   { id: 2, type: "individual", booked: false },
//   { id: 3, type: "individual", booked: false },
//   { id: 4, type: "individual", booked: false },
//   { id: 5, type: "individual", booked: false },
//   { id: 6, type: "individual", booked: false },
//   { id: 7, type: "individual", booked: false },
//   { id: 8, type: "individual", booked: false },
//   { id: 9, type: "individual", booked: false },
//   { id: 10, type: "individual", booked: false },
//   { id: 11, type: "team", booked: false },
//   { id: 12, type: "team", booked: false },
//   { id: 13, type: "team", booked: false },
//   { id: 14, type: "team", booked: false },
//   { id: 15, type: "team", booked: false },
// ];

// function App() {
//   const [desks, setDesks] = useState(initialDesks);
//   const [revenue, setRevenue] = useState({
//     basic: 0,
//     premium: 0,
//     executive: 0,
//     team: 0,
//   });

//   const handleBooking = (deskId, hours, tier) => {
//     const updatedDesks = desks.map((desk) =>
//       desk.id === deskId ? { ...desk, booked: true } : desk
//     );
//     setDesks(updatedDesks);

//     const rate =
//       tier === "team"
//         ? 25
//         : tier === "basic"
//         ? 10
//         : tier === "premium"
//         ? 15
//         : 20;
//     let total = rate * hours;
//     if (hours > 3) total *= 0.9;

//     setRevenue((prev) => ({
//       ...prev,
//       [tier]: prev[tier] + total,
//     }));
//   };

//   return (
//     <div className="App">
//       <h1>Co-working Space Booking System</h1>
//       <div className="desk-container">
//         {desks.map((desk) => (
//           <Desk key={desk.id} desk={desk} />
//         ))}
//       </div>
//       <BookingForm desks={desks} onBook={handleBooking} />
//       <Dashboard revenue={revenue} />
//     </div>
//   );
// }

// export default App;

const initialDesks = [
  { id: 1, type: "individual", booked: false },
  { id: 2, type: "individual", booked: false },
  { id: 3, type: "individual", booked: false },
  { id: 4, type: "individual", booked: false },
  { id: 5, type: "individual", booked: false },
  { id: 6, type: "individual", booked: false },
  { id: 7, type: "individual", booked: false },
  { id: 8, type: "individual", booked: false },
  { id: 9, type: "individual", booked: false },
  { id: 10, type: "individual", booked: false },
  { id: 11, type: "team", booked: false },
  { id: 12, type: "team", booked: false },
  { id: 13, type: "team", booked: false },
  { id: 14, type: "team", booked: false },
  { id: 15, type: "team", booked: false },
];

function App() {
  const [desks, setDesks] = useState(initialDesks);
  const [bookings, setBookings] = useState([]);

  const handleBooking = (deskId, hours, tier) => {
    const updatedDesks = desks.map((desk) =>
      desk.id === deskId ? { ...desk, booked: true } : desk
    );
    setDesks(updatedDesks);

    const rate =
      tier === "team"
        ? 25
        : tier === "basic"
        ? 10
        : tier === "premium"
        ? 15
        : 20;
    let total = rate * hours;
    if (hours > 3) total *= 0.9;

    const newBooking = {
      deskId,
      hours,
      tier,
      total,
      timestamp: new Date(),
    };

    setBookings([...bookings, newBooking]);
  };

  return (
    <div className="App">
      <h1>Co-working Space Booking System</h1>
      <div className="desk-container">
        {desks.map((desk) => (
          <Desk key={desk.id} desk={desk} />
        ))}
      </div>
      <BookingForm desks={desks} onBook={handleBooking} />
      <Dashboard bookings={bookings} />
    </div>
  );
}

export default App;
