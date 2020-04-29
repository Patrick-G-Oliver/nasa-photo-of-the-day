import React from "react";


const APOD = props => {
    return (
        <img
        alt='The Kepler-90 System'
        src={props.hdurl}
      />
    );
};

export default APOD;