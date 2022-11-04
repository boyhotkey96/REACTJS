import { useState } from "react";
import "./ColorBox.scss";

// variable save Prev indexRandom
let prevIndexRandom = null;
const getRandomColor = () => {
    const initColor = ["black", "yellow", "blue", "green", "red"];
    let indexRandom;
    
    // handle avoid repeat indexRandom
    do {
        indexRandom = Math.floor(Math.random() * initColor.length);
    } while (prevIndexRandom === indexRandom);
    prevIndexRandom = indexRandom;

    return initColor[indexRandom];
};

function ColorBox() {
    const [color, setColor] = useState(() => {
        return localStorage.getItem("color-box") || "deeppink";
    });

    const [prevColor, setPrevColor] = useState('#999');

    const handleBoxClick = () => {
        setPrevColor(color);

        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem("color-box", newColor);
    };

    return (
        <div className="container">
            <h1>Change color box local storage</h1>
            <div
            className="box-color"
            style={{ backgroundColor: color, color: prevColor }}
            onClick={handleBoxClick}
        >
            Color Box
        </div>
        </div>
    );
}

export default ColorBox;