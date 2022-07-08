import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Bookings from "./components/Bookings";
import InputBox from "./components/InputBox";

function App() {
  function addBooking(elements) {
    console.log(elements);
  }
  return (
    <div className="App">
      <header className="App-header">
        <InputBox addBooking={addBooking} />
        <Bookings />
      </header>
    </div>
  );
}

export default App;
