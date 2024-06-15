import React from "react";

export function Desk({ desk }) {
  return (
    <div className={`desk ${desk.booked ? "booked" : ""}`}>
      {desk.type} desk {desk.id} - {desk.booked ? "Booked" : "Available"}
    </div>
  );
}

// export default Desk;
