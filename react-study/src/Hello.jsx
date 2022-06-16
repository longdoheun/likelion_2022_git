import React from 'react';
import styled from 'styled-components';
import "./Hello.css";

export default function Hello() {
    const StyledButton = styled.button`
        color: red;
        background-color: gray;
    `
    return(
        <>
        <StyledButton> 나만의 버튼</StyledButton>
        <div className="red">hello world!</div>
        </>
    )
}