// My first answer
// colorArray holds 5 elements
let colorArray = ["#1BB321", "#4DBD1C", "#79A722", "#BDBD1C", "#B3A31B"];

let i = 0;


function ChangeColor() {
    if (i === colorArray.length - 1) {
        i = 0;
        document.getElementById("color-div").style.background = colorArray[0];
    } else {
        i++;
        document.getElementById("color-div").style.background = colorArray[i];
        // return false;
    }
    console.log(i);
}

// Optimized answer
// function ChangeColor() {
//   document.getElementById("color-div").style.background = colorArray[i % colorArray.length];
//   i++;
//   console.log(i % colorArray.length);
// }


export default ChangeColor;