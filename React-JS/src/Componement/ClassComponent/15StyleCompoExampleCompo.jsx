import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class StyledCompoExample extends Component {
    render() {
        const rotate = keyframes`
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
            `;
        const StyledCompBtn = styled.button`
            color: palevioletred;
            font-size: 1em;
            margin: 1em;
            padding: 0.25em 1em;
            animation: ${rotate} 2s linear infinite;
            border: 2px solid palevioletred;
            border-radius: 3px;
            `;
        // const Button = styled.button'color: palevioletred;  font-size: 1em; margin: 1em; padding: 0.25em 1em; border: 2px solid palevioletred; border-radius: 3px;';
        return (
            <div>
                <StyledCompBtn>Click me</StyledCompBtn>
            </div>
        );
    }
}

export default StyledCompoExample;