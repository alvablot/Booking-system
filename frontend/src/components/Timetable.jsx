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
  const [thisMonday, setThisMonday] = useState(date);
  let [inputBox, setInputBox] = useRecoilState(inputBoxState);

  setWeek(parseInt(week));
  function handleTimeClick(year, month, obj, time) {
    let strDate = obj.id;
    if (obj.id.toString().length < 2) strDate = "0" + strDate;
    if (month.toString().length < 2) month = "0" + month;
    setDate({
      year: year,
      month: month,
      date: strDate,
      time: time,
      day: date.day,
    });
    setInputBox("block");

    if (obj.className === "day") obj.className = "activeDay";
    else obj.className = "day";
  }

  useEffect(() => {
    setDate(date);
    //setInputBox("block");
  }, [date]);

  return (
    <div id="timetable-wrap">
      Date: {week} Month: {month} Year: {year}
      <table className="timetable">
        <thead>
          <tr className="dayRow">
            <td className="time">Time</td>
            <td className="day">Monday {thisMonday.date}</td>
            <td className="day">Tuesday {parseInt(thisMonday.date) + 1}</td>
            <td className="day">Wednesday {parseInt(thisMonday.date) + 2}</td>
            <td className="day">Thirsday {parseInt(thisMonday.date) + 3}</td>
            <td className="day">Friday {parseInt(thisMonday.date) + 4}</td>
            <td className="day">Saturday {parseInt(thisMonday.date) + 5}</td>
            <td className="day">Sunday {parseInt(thisMonday.date) + 6}</td>
          </tr>
        </thead>
        <tbody>
          {allTime.map((item, i) => {
            return (
              <tr className="dayRow" key={`dayRow${item}`}>
                <td className="time" key={`time${item}`}>
                  {item}
                </td>
                <td
                  className="day"
                  id={thisMonday.date}
                  onClick={(e) => {
                    handleTimeClick(date.year, date.month, e.target, item);
                  }}
                ></td>
                <td
                  className="day"
                  id={thisMonday.date + 1}
                  onClick={(e) => {
                    handleTimeClick(date.year, date.month, e.target, item);
                  }}
                ></td>
                <td
                  className="day"
                  id={thisMonday.date + 2}
                  onClick={(e) => {
                    handleTimeClick(date.year, date.month, e.target, item);
                  }}
                ></td>
                <td
                  className="day"
                  id={thisMonday.date + 3}
                  onClick={(e) => {
                    handleTimeClick(date.year, date.month, e.target, item);
                  }}
                ></td>
                <td
                  className="day"
                  id={thisMonday.date + 4}
                  onClick={(e) => {
                    handleTimeClick(date.year, date.month, e.target, item);
                  }}
                ></td>
                <td
                  className="day"
                  id={thisMonday.date + 5}
                  onClick={(e) => {
                    handleTimeClick(date.year, date.month, e.target, item);
                  }}
                ></td>
                <td
                  className="day"
                  id={thisMonday.date + 6}
                  onClick={(e) => {
                    handleTimeClick(date.year, date.month, e.target, item);
                  }}
                ></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Timetable;
