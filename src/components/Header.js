import React from "react";
import styled from "styled-components";

const styledHeadingDiv = styled.div`
border: 2px solid black;
`;

const Header = props => {

    return (
        <styledHeadingDiv>
            <h1>{props.title}</h1>
        </styledHeadingDiv>
    );
};

export default Header;