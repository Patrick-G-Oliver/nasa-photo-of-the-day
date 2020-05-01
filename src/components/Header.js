import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
color: green;
margin: 0 auto;
padding-top: 10%;
font-size: 4rem;
@media (max-width: 1525px) {
    padding: 2%;
    text-align: center;
@media (max-width: 500px) {
    font-size: 3rem;
   
`;

const Header = props => {
    return (
        <StyledHeader>{props.title}</StyledHeader>
    );
};

export default Header;