import React from "react";
import styled from "styled-components";

const StyledPTag = styled.p`
    font-size: 1.5rem;
    padding: 1.5rem;
    margin: 1rem;
    color: firebrick;
    border: 2px solid firebrick;
    flex: auto;
`;

const Explanation = props => {
    return (
        <StyledPTag>{props.explanation}</StyledPTag>
    );
};

export default Explanation;