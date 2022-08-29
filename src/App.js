import React from 'react';
import './App.css';
// import components
import Welcome from './components/Welcome';
import ChangeColor from './components/ChangeColor';
import ChangeColorTwo from './components/ChangeColorTwo';

// Hi SilverTree employee thats reading this, if you found someone else, can you still answer one question for me?
// Why is your SilverTreeBrands website built with Webflow? Instead of an inhouse custom website?
// If you would be so kind as to respond to hello@iancahn.com {thanks}

// Write a React functional button component, which will cycle through an array of colours passed to the component by a prop (``colors: string[]``) 
// when the button is clicked, such that each time the button is clicked, it changes the button’s colour to the next in the array. Upload the code to github,
//  gitlab or similar, and post the (public) url here. *

function App() {
  return (
    <div className="App">
      <Welcome name="silvertree folks" />
      {/* version 1 */}
      <div id="color-div"><h3 style={{ color: "#262424", fontSize: "2rem" }}>This div magically changes color</h3>
      </div>
      <div>
        <button id="color-btn" onClick={ChangeColor}>Change Color</button>
      </div>
      {/* <button onClick={Colors}>Change Color2</button> */}
      <div>
        <h2>Version 2</h2>
        <ChangeColorTwo />
      </div >
    </div >
  );
}

export default App;
