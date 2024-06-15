import React, { useState } from "react";
function BookingForm({ desks, onBook }) {
  const [selectedDesk, setSelectedDesk] = useState("");
  const [hours, setHours] = useState(1);
  const [tier, setTier] = useState("basic");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDesk && hours && tier) {
      const deskType = desks.find(
        (desk) => desk.id === parseInt(selectedDesk)
      ).type;
      onBook(
        parseInt(selectedDesk),
        parseInt(hours),
        deskType === "team" ? "team" : tier
      );
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Desk:
        <select
          value={selectedDesk}
          onChange={(e) => setSelectedDesk(e.target.value)}
        >
          <option value="" disabled>
            Select Desk
          </option>
          {desks.map(
            (desk) =>
              !desk.booked && (
                <option key={desk.id} value={desk.id}>
                  {desk.type} desk {desk.id}
                </option>
              )
          )}
        </select>
      </label>
      {selectedDesk &&
        desks.find((desk) => desk.id === parseInt(selectedDesk)).type ===
          "individual" && (
          <label>
            Tier:
            <select value={tier} onChange={(e) => setTier(e.target.value)}>
              <option value="basic">Basic - $10/hr</option>
              <option value="premium">Premium - $15/hr</option>
              <option value="executive">Executive - $20/hr</option>
            </select>
          </label>
        )}
      <label>
        Hours:
        <input
          type="number"
          min="1"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
      </label>
      <button type="submit">Book</button>
    </form>
  );
}

export default BookingForm;
