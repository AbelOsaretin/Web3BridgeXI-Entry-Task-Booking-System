// import React from "react";

// export function Desk({ desk }) {
//   return (
//     <div className={`desk ${desk.booked ? "booked" : ""}`}>
//       {desk.type} desk {desk.id} - {desk.booked ? "Booked" : "Available"}
//     </div>
//   );
// }

// // export default Desk;

import React from "react";
import styles from "./Desk.module.css";

export function Desk({ desk }) {
  return (
    <div
      className={`${styles.desk} ${
        desk.booked ? styles.booked : styles.available
      }`}
    >
      {desk.type} desk {desk.id} - {desk.booked ? "Booked" : "Available"}
    </div>
  );
}

// export default Desk;
