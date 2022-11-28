import { useEffect, useState } from "react";

const formatDate = (date) => {
  // console.log([date]);
  const hour = `0${date.getHours()}`.slice(-2);
  const minute = `0${date.getMinutes()}`.slice(-2);
  const second = `0${date.getSeconds()}`.slice(-2);

  return `${hour}:${minute}:${second}`;
};

function useClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timerId = setInterval(() => {
      const date = new Date();
      const timeDate = formatDate(date);
      setTime(timeDate);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return { time }
}

export default useClock;
