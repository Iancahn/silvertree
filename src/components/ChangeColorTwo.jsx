import React, { useState } from 'react';


let colorArray = ["#1BB321", "#4DBD1C", "#79A722", "#BDBD1C", "#B3A31B"];
let i = 0;

function ChangeColorTwo() {
    const [newColor, setNewColor] = useState('');

    function AdaptColor() {
        if (i === colorArray.length - 1) {
            i = 0;
            setNewColor(colorArray[0]);
        } else {
            i++;
            setNewColor(colorArray[i]);
        }
    }

    return (
        <div>
            <p>The new color is {newColor}</p>
            <button id="second-button" onClick={AdaptColor} style={{ backgroundColor: `${newColor}` }}>Click to Change even more color!</button>
        </div>
    )
}

export default ChangeColorTwo;