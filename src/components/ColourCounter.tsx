import { useState } from "react";
import "../Styles/ColourCounter.css";


function ColourCounter () {
    const [redCount, setRedCount] = useState(0)
    const [blueCount, setBlueCount] = useState(0)

    const getBiggerColourText = () => {
        if (redCount > blueCount){
            return "Red is bigger than blue";
        }
        else if (blueCount > redCount){
            return "Blue is bigger than red";
        }
        else{
            return "Red and Blue have been pressed equal times";
        }
    }


    return (
        <>
        <div className="flex-container">
            <div className = "Colour-Container red-container">
                <p>Red was pressed {redCount} times</p>
                <button type = "button" onClick = {() => setRedCount(redCount + 1)}>
                    Red
                </button>
            </div>
            <div className = "Colour-Container blue-container">
                <p>Blue was pressed {blueCount} times</p>
                <button type = "button" onClick = {() => setBlueCount(blueCount + 1)}>
                    Blue
                </button>
            </div>
        </div>
        <p>{getBiggerColourText()}</p>
        {/* {redCount > blueCount && <p>Red is bigger than blue</p>}
        {blueCount > redCount && <p>Blue is bigger than red</p>}
        {redCount === blueCount && <p>Red and blue are equal</p>} */}

        </>
    );
}

export default ColourCounter;