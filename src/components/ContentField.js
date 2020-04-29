import React from "react";
import Header from "./Header.js";
import APOD from "./APOD.js";
import Explanation from "./Explanation.js";

const ContentField = props => {
    return (
        <div>
         <Header 
          title = {props.nasaData.title}
         />
 
         <APOD
          hdurl = {props.nasaData.hdurl}
         />
        
         
         
       </div>
    );
};

export default ContentField;
/*
hdurl = {nasaData.hdurl}
explanation = {nasaData.explanation}
<h1>{props.title}</h1>
*/