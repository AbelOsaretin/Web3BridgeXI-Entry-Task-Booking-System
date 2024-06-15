// import React from "react";

// export function Dashboard({ revenue }) {
//   return (
//     <div className="dashboard">
//       <h2>Revenue Dashboard</h2>
//       <p>Basic: ${revenue.basic.toFixed(2)}</p>
//       <p>Premium: ${revenue.premium.toFixed(2)}</p>
//       <p>Executive: ${revenue.executive.toFixed(2)}</p>
//       <p>Team: ${revenue.team.toFixed(2)}</p>
//       <p>
//         Total: $
//         {(
//           revenue.basic +
//           revenue.premium +
//           revenue.executive +
//           revenue.team
//         ).toFixed(2)}
//       </p>
//     </div>
//   );
// }

// export default Dashboard;

//
import React, { useState } from "react";
import styles from "./Dashboard.module.css";

export function Dashboard({ bookings = [] }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const filteredBookings = bookings.filter((booking) => {
    const bookingDate = new Date(booking.timestamp);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return (
      (!startDate || bookingDate >= start) && (!endDate || bookingDate <= end)
    );
  });

  const revenue = filteredBookings.reduce(
    (acc, booking) => {
      acc[booking.tier] += booking.total;
      return acc;
    },
    { basic: 0, premium: 0, executive: 0, team: 0 }
  );

  return (
    <div className={styles.dashboard}>
      <h2>Revenue Dashboard</h2>
      <div className={styles.filters}>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>
      <div className={styles.revenue}>
        <p>Basic: ${revenue.basic.toFixed(2)}</p>
        <p>Premium: ${revenue.premium.toFixed(2)}</p>
        <p>Executive: ${revenue.executive.toFixed(2)}</p>
        <p>Team: ${revenue.team.toFixed(2)}</p>
        <p className={styles.total}>
          Total: $
          {(
            revenue.basic +
            revenue.premium +
            revenue.executive +
            revenue.team
          ).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

// export default Dashboard;
