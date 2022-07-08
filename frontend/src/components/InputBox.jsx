import React, { useState } from "react";

function InputBox(props) {
  const [headValue, setHeadValue] = useState(props.headValue);
  const [startDateValue, setStartDateValue] = useState(props.startDateValue);
  const [startTimeValue, setStartTimeValue] = useState(props.startTimeValue);
  const [stopDateValue, setStopDateValue] = useState(props.stopDateValue);
  const [stopTimeValue, setStopTimeValue] = useState(props.stopTimeValue);
  const [infoValue, setInfoValue] = useState(props.infoValue);
  const [userValue, setUserValue] = useState(props.userValue);
  const [customerValue, setCustomerValue] = useState(props.customerValue);
  const [roomValue, setRoomValue] = useState(props.roomValue);

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs.headline);
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
        onChange={handleChange}
      />
      <label htmlFor="startTime">Select a time:</label>
      <input
        type="time"
        id="startTime"
        name="startTime"
        onChange={handleChange}
      ></input>
      <br />

      <label htmlFor="stopDate">To</label>
      <input
        type="date"
        id="stopDate"
        name="stopDate"
        onChange={handleChange}
      />
      <label htmlFor="stopTime">Select a time:</label>
      <input type="time" id="stopTime" onChange={handleChange}></input>
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
      <label htmlFor="customers">Customer</label>
      <select id="customers" onChange={handleChange}>
        <option value="volvo">Volvo</option>
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
