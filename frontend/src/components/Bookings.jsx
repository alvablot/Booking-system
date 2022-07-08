import React, { useState, useEffect } from "react";

function Bookings(props) {
  let [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/bookings")
      .then((res) => res.json())
      .then((json) => setAllBookings(json));
  }, []);


  return (
    <div className="list">
        <h1>Bookings</h1>
      {allBookings.map((item, i) => {
        if (i > 0)
          return (
            <ul key={`book${i}`}>
              <li key={`id${i}`}>{item.id}</li>
              <li key={`headline${i}`}>{item.headline}</li>
              <li key={`start${i}`}>{item.start}</li>
              <li key={`stop${i}`}>{item.stop}</li>
              <li key={`info${i}`}>{item.info}</li>
              <li key={`user${i}`}>{item.user}</li>
              <li key={`customer${i}`}>{item.customer}</li>
              <li key={`room${i}`}>{item.room}</li>
            </ul>
          );
      })}
    </div>
  );
}

export default Bookings;
