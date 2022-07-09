import React, { useState, useEffect } from "react";

function Bookings(props) {
  let { allBookings } = props;
  /*
  let [allBookings, setAllBookings] = useState([]);
  function fetchBookings() {
    useEffect(() => {
      fetch("http://localhost:4000/bookings")
        .then((res) => res.json())
        .then((json) => setAllBookings(json));
    }, []);
  }
  */
  props.fetchBookings();
  return (
    <div className="list">
      <h1>Bookings</h1>
      {allBookings.map((item, i) => {
        return (
          <div key={`book${i}`} className="booking">
            <div key={`id${i}`}>
              <b>ID: </b>
              {item.id}
            </div>
            <div key={`headline${i}`}>
              <b>{item.headline}</b>
            </div>
            <div key={`start${i}`}>
              <b>From: </b>
              {item.start}
            </div>
            <div key={`stop${i}`}>
              <b>To: </b>
              {item.stop}
            </div>
            <div key={`info${i}`}>
              <b>Info: </b>
              {item.info}
            </div>
            <div key={`user${i}`}>
              <b>User: </b>
              {item.user}
            </div>
            <div key={`customer${i}`}>
              <b>Customer: </b>
              {item.customer}
            </div>
            <div key={`room${i}`}>
              <b>Room: </b>
              {item.room}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Bookings;
