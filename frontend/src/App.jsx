import "./App.css";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { allBookingsState } from "./recoil/allBookings/atom";
import { newBookingState } from "./recoil/newBooking/atom";
import { allTimeState } from "./recoil/allTime/atom";
import Bookings from "./components/Bookings";
import InputBox from "./components/InputBox";
import Timetable from "./components/Timetable";
const url = "http://localhost:4000";

function App() {
  let [allBookings, setAllBookings] = useRecoilState(allBookingsState);
  let [newBooking, setNewBooking] = useRecoilState(newBookingState);

  let [bookingId, setBookingId] = useState("");
  function fetchBookings() {
    useEffect(() => {
      fetch(`${url}/bookings`)
        .then((res) => res.json())
        .then((json) => setAllBookings(json));
    }, []);
  }
  const [headline, setHeadline] = useState("")
  function addBooking(elements, form) {
    const headline = form.headline.value;
    const startDate = form.startDate.value;
    const stopDate = form.stopDate.value;
    const startTime = form.startTime.value;
    const stopTime = form.stopTime.value;
    const info = form.info.value;
    const user = form.user.value;
    const customer = form.customer.value;
    const room = form.room.value;
    console.log(user)
    
    fetch(`${url}/booking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        headline: headline,
        start: `${startDate} ${startTime}:00`,
        stop: `${stopDate} ${stopTime}:00`,
        info: info,
        user: user,
        customer: customer,
        room: room,
      }),
    })
      .then((res) => res.json())
      .then((json) => setAllBookings(json));
      
  }

  function deleteBooking(id) {
    fetch(`${url}/booking/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((json) => setAllBookings(json));
  }

  return (
    <div className="App">
      <header className="App-header">
        <InputBox addBooking={addBooking} />
        <Timetable />
        <Bookings
          fetchBookings={fetchBookings}
          deleteBooking={deleteBooking}
          //allBookings={allBookings}
        />
      </header>
    </div>
  );
}
export default App;
