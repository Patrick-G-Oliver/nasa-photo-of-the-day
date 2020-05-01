import React from "react";
import Header from "./Header.js";
import APOD from "./APOD.js";
import Explanation from "./Explanation.js";
import styled from "styled-components";


const ContainerFieldDiv = styled.div`
    background-color: black;
    display: flex;
    flex-wrap: wrap;
`;

const ContentField = props => {
    return (
        <ContainerFieldDiv>
         <Header 
          title = {props.nasaData.title}
         />
 
         <APOD
          hdurl = {props.nasaData.hdurl}
         />
        
         <Explanation
          explanation = {props.nasaData.explanation}
         />
       </ContainerFieldDiv>
    );
};

export default ContentField;
