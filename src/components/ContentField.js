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
        
         <Explanation
          explanation = {props.nasaData.explanation}
         />
         
       </div>
    );
};

export default ContentField;
