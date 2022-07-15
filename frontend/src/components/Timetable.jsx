import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { allBookingsState } from "../recoil/allBookings/atom";
import { allTimeState } from "../recoil/allTime/atom";
import { weekState } from "../recoil/week/atom";
import { monthState } from "../recoil/month/atom";
import { yearState } from "../recoil/year/atom";
import { dateState } from "../recoil/date/atom";
import { inputBoxState } from "../recoil/inputBox/atom";

function Timetable(props) {
  const [allTime, setAllTime] = useRecoilState(allTimeState);
  const [week, setWeek] = useRecoilState(weekState);
  const [month, setMonth] = useRecoilState(monthState);
  const [year, setYear] = useRecoilState(yearState);
  const [date, setDate] = useRecoilState(dateState);
  let [thisMonday, setThisMonday] = useState(date);

  const [thisWeek, setThisWeek] = useState(0);

  let [inputBox, setInputBox] = useRecoilState(inputBoxState);
  let [days, setDays] = useState([]);

  for (let i = 0; i < 7; i++) {
    if (days[i] > 31) {
      days[i] = 1 + i;
    } else days[i] = parseInt(thisMonday.date) + thisWeek + i;
  }
  useEffect(() => {
    setThisWeek(thisWeek);
  }, [thisWeek]);

  //setWeek(parseInt(week));
  function handleTimeClick(year, month, obj, date, hour, minute) {
    let strMonth = month;
    let strDate = date;
    if (strMonth.toString().length < 2) strMonth = "0" + strMonth;
    if (strDate.toString().length < 2) strDate = "0" + strDate;
    const dateStamp = `${year}-${strMonth}-${strDate}`;

    let strHour = hour;
    let strMinute = minute;
    if (strHour.toString().length < 2) strHour = "0" + strHour;
    if (strMinute.toString().length < 2) strMinute = "0" + strMinute;
    const time = `${strHour}:${strMinute}`;
    //if (month.toString().length < 2) month = "0" + month;

    setDate({
      dateStamp: dateStamp,
      year: year,
      month: month,
      date: obj.id,
      hour: hour,
      minute: minute,
      time: time,
      day: date.day,
    });
    setInputBox("block");

    if (obj.className === "day") obj.className = "activeDay";
    else obj.className = "day";
  }

  useEffect(() => {
    setDate(date);
  }, [date]);

  return (
    <div id="timetable-wrap">
      <button
        onClick={() => {
          setThisWeek(thisWeek - 7);
        }}
      >
        Previous
      </button>
      <span style={{padding: "5px"}}> Year: {year} Month: {month} Date: {week} </span>
      <button
        onClick={() => {
          setThisWeek(thisWeek + 7);
        }}
      >
        Next
      </button>
      <table className="timetable">
        <thead>
          <tr className="dayRow">
            <td className="time">Time</td>
            <td className="day">Monday {days[0]}</td>
            <td className="day">Tuesday {days[1]}</td>
            <td className="day">Wednesday {days[2]}</td>
            <td className="day">Thursday {days[3]}</td>
            <td className="day">Friday {days[4]}</td>
            <td className="day">Saturday {days[5]}</td>
            <td className="day">Sunday {days[6]}</td>
          </tr>
        </thead>
        <tbody>
          {allTime.map((item, i) => {
            return (
              <tr className="dayRow" key={`dayRow${item}`}>
                <td className="time" key={`time${item}`}>
                  {item}
                </td>
                {days.map((day, numberOfDays) => {
                  return (
                    <td  key={`timeCell${day}`}
                      className="day"
                      id={days[numberOfDays]}
                      onClick={(e) => {
                        handleTimeClick(
                          date.year,
                          date.month,
                          e.target,
                          date.date,
                          i,
                          0
                        );
                      }}
                    ></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Timetable;
