//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a react component
const App =() => {
    const buttonText={text:"click me"};
    return (
    <div>
    <label className="label" for ="name">
        Enter name
        </label>
    <input id="name" type="text"/>
    <button style={{backgroundColor:'blue',color:'White'}}>
        {buttonText.text}
    </button>
    </div>
    );
}


//Take the react component and show it on screen

ReactDOM.render(<App/>,document.querySelector('#root'));