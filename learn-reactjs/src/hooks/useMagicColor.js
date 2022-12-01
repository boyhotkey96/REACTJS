import { useEffect, useRef, useState } from "react";

const getColor = (currentColor) => {
  const colorList = ["red", "green", "yellow", "deeppink"];

  // Key
  /* const currentIndex = colorList.indexOf(currentColor)
  let newIndex = currentIndex;
 
  while (newIndex === currentIndex) {
    newIndex = Math.trunc(Math.random() * colorList.length);
  }
 
  return colorList[newIndex]; */

  // value
  let newColor = currentColor;

  while (newColor === currentColor) {
    const indexColor = Math.trunc(Math.random() * colorList.length);
    newColor = colorList[indexColor];
  }

  return newColor;
};

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");

  useEffect(() => {
    const timerId = setInterval(() => {
      // console.log(color)
      // console.log(colorRef.current)
      const newColor = getColor(colorRef.current);
      console.log(newColor);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return color;
}

export default useMagicColor;
