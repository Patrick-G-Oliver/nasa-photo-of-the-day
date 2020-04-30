import React from "react";


const APOD = props => {
    return (
        <img
        src={props.hdurl}
        alt='The Kepler-90 System'
      />
    );
};

export default APOD;