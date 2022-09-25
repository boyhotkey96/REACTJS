import { useLayoutEffect, useEffect, useState } from "react";

let index = 0;
function Countdownplus() {
  const [count, setCount] = useState("Hôm nay là ngày 25/09 buồn!");
  const [cakho, setCakho] = useState(false);
  const [phaubo, setPhaubo] = useState(false);
  const array = ["Thoản", "Cá", "Khô", "Thích"];
  let item = array[index];

  // useEffect(() => {
  //   if (count > 3) {
  //     setCount(0);
  //   }
  // }, [count]);

  useLayoutEffect(() => {
    if (index === array.length - 1) {
      index = -1;
    }
  }, [index]);

  const handleRun = () => {
    setCount(item);
    index++;
  };

  const handleCakho = () => {
    setPhaubo(false);
    setCakho(!cakho);
  };

  const handlePhaubo = () => {
    setCakho(false);
    setPhaubo(!phaubo);
  };

  return (
    <div style={{ padding: "20px", fontSize: "72px" }}>
      <div style={{ padding: "10px" }}>{count}</div>
      <button onClick={handleRun}>Run</button>
      {count === "Thích" && (
        <div>
          <button onClick={handleCakho}>Cá Khô</button>
          <button onClick={handlePhaubo}>Phấu bò</button>
          <br />
          {cakho && (
            <img
              src="https://lh3.googleusercontent.com/GglMvtaZYINId6PQkExN460JtPMtu3Sc4OhGjInNjjAfpDFwvdFcNOu1yTnhUqqC10GP-IX_NhZxild6XqBqLVl4E60LBWY6HYSTkelKdYaPmVoHcDUnfOmMcmIL8T9nS-3xMIcNs9Px0YM3xIoI6kyiUb-ASIVK5RgRIwmwLZZOS72VUtFGeQmZczdXVQ8b5NBjjZpsZ5pSyoN5PudRqebyCkzAem3pprfWw1IUf70qNG7-FblMyyqC0HI63TH16-P8tbCKk_S_MAqqE1aCCv8GhCIuoajB1lZOvwbNOse_ijGprj_lM8gFSNq4_SHNAA_C2waegoPqzmxxIXZpZZIaJi4xJtiCBeSvAeR8VHa1iPhEaUqjfIMrvD1o_tZFOwlDGDQEegDK4T9ASGV8biMTEQVNd-uhDqNTRGRzzrIe5YDKZdCWMlZnlNbi1pPijpusR9vAdfsphSovzIoCLtgQ2Dfds4H2NkJLyjaR-dMyu30_Y_cshtQCeh4yXJn2lf7wlYFOnxFb0BpZDRxKznLU9jontNjJrAivyBYX0tt_gsmMzeEokcEp_qxUCXOm_9DVLtzWNZ6QYGy8tIgLMPFWFwzfHpe7u_S4AgZnRPvp2Hf-Qh6kHnxvbaN7OqivzEWGTKW0va17xFX2IhkB1nSqMc39BI7Ho-kl21TGFSu5NECh7tHfKhTCPr8gY7lABX2X0zz2MwG_IuP6MpWHECCmvEeDBYvv5L1J6UPXkHqtXxtGF5wDdwCSmXtLdnyNcGJU5F2OVZiJLNiMK0gHbEt46i7ec0FIkDfPSeMHjS_ulAi3xerSVtMfscolE9mW7R2syLqeGiOBqqnEvbmTaUK0mVG04XuuvYx0MrbaUBB-Q_w0jn_Y9rHythzpsc5LqSS08wD4YlkvJRM=w794-h1410-no?authuser=0"
              alt=""
              width="200px"
            />
          )}
          {phaubo && (
            <img
              src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/285087965_3125534597696728_9029308606336763269_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=2fUFG1zOoQQAX-6pjwQ&_nc_ht=scontent.fdad3-4.fna&oh=00_AT_T8Jfmk_5DsS-N4pZRFildrvi0FiCcDm1A89alKYyOXA&oe=633530D5"
              alt=""
              width="200px"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Countdownplus;
