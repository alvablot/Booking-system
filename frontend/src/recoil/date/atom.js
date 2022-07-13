import { atom } from "recoil";
const now = new Date();
let month = now.getMonth() + 1;
if (month < 10) month = "0" + month;
const date = now.getDate();
const day = now.getDay() - 1;
const year = now.getYear();
const hour = now.getHours();
let minute = now.getMinutes();
if (minute < 10) minute = "0" + minute;
const timeStamp = `${hour}:${minute}`;

export const dateState = atom({
  key: "dates",
  default: {
    year: year + 1900,
    month: month,
    date: date - day,
    day: day,
    hour: hour,
    time: timeStamp,
  },
});
