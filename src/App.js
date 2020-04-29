import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ContentField from './components/ContentField';



function App() {

  const [nasaData, setNasaData] = useState([])

  useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=qyp5yZIi8Ij6pFkU5K84ADlXFdbZRJJd7HqzBaXS") 
      .then(response => {
        console.log('response', response.data)
        setNasaData(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div>
      <ContentField
      nasaData = {nasaData}
      />
    </div>
    );
  }
  
  export default App;

    /*

    title = {nasaData.title}
      hdurl = {nasaData.hdurl}
      explanation = {nasaData.explanation}

    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
    */
  
