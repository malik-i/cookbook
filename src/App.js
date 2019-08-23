import React from 'react';
import logo from './logo.svg';
import './App.css';

const App =() => {

const APP_ID = "86d03d82"
const APP_KEY = "d4fdeba0a4c092b01a0e145a11163d19"
const EXAMPLE_REQ = 
`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return(
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  )
}

export default App;
