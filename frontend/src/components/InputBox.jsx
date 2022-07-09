import React, { useState } from "react";

const now = new Date();
const year = now.getYear();
let month = now.getMonth();
let date = now.getDate();
const hour = now.getHours();
let minute = now.getMinutes();
if (month < 10) month = "0" + month;
if (date < 10) date = "0" + date;
if (minute < 10) minute = "0" + minute;

const dateStamp = `${year + 1900}-${month}-${date}`;
const timeStamp = `${hour}:${minute}`;

function InputBox(props) {
  /*
  const [headValue, setHeadValue] = useState(props.headValue);
  const [startDateValue, setStartDateValue] = useState(props.startDateValue);
  const [startTimeValue, setStartTimeValue] = useState(props.startTimeValue);
  const [stopDateValue, setStopDateValue] = useState(props.stopDateValue);
  const [stopTimeValue, setStopTimeValue] = useState(props.stopTimeValue);
  const [infoValue, setInfoValue] = useState(props.infoValue);
  const [userValue, setUserValue] = useState(props.userValue);
  const [customerValue, setCustomerValue] = useState(props.customerValue);
  const [roomValue, setRoomValue] = useState(props.roomValue);
*/
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(Object.keys(inputs).length);
    props.addBooking(inputs);
  };
  
  return (
    <form className="inputBox" onSubmit={handleSubmit}>
      <h1>New Booking</h1>
      <label htmlFor="headline">Headline</label>
      <br />
      <input
        id="headline"
        name="headline"
        className="textInput"
        type="text"
        value={inputs.headline || ""}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="startDate">From</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={inputs.startDate || dateStamp}
        onChange={handleChange}
      />
      <label htmlFor="startTime">Select a time:</label>
      <input
        type="time"
        id="startTime"
        name="startTime"
        value={inputs.startTime || timeStamp}
        onChange={handleChange}
      ></input>
      <br />
      <label htmlFor="stopDate">To</label>
      <input
        type="date"
        id="stopDate"
        name="stopDate"
        value={inputs.stopDate || dateStamp}
        onChange={handleChange}
      />
      <label htmlFor="stopTime">Select a time:</label>
      <input
        type="time"
        id="stopTime"
        name="stopTime"
        value={inputs.stopTime || timeStamp}
        onChange={handleChange}
      ></input>
      <br />
      <label htmlFor="info">Info</label>
      <br />
      <textarea
        id="info"
        name="info"
        className="infoInput"
        rows="4"
        cols="50"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="room">Room</label>
      <select id="room" name="room" onChange={handleChange}>
        <option value="room">Room</option>
        <option value="room1">room1</option>
        <option value="room2">room2</option>
        <option value="room3">room3</option>
        <option value="room4">room4</option>
      </select>
      <label htmlFor="user">User</label>
      <input
        id="user"
        name="user"
        className="textInput"
        type="text"
        value={inputs.user || ""}
        onChange={handleChange}
      />
      <label htmlFor="customer">Customer</label>
      <select id="customer" name="customer" onChange={handleChange}>
        <option value="Chose Customer">Chose Customer</option>
        <option value="new customer">New customer</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <br />
      <button type="submit" className="button">
        Add booking
      </button>
    </form>
  );
}

export default InputBox;
