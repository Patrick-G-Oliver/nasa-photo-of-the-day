import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 45%;
  height: auto;
  margin: 2%;
  @media (max-width: 1545px) {
    margin: 2% auto;
  }
  @media (max-width: 1200px) {
    width: 65%;
  }
`;
const APOD = props => {
    return (
        <StyledImg
        src={props.hdurl}
        alt='The Kepler-90 System'
      />
    );
};

export default APOD;