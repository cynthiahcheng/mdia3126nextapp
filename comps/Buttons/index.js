import React from 'react';
import styled, {css} from 'styled-components';

const LoginButton = styled.h3`
    font-size:1em;
    color:${props=>props.color ? props.color : "#FFF"};
    padding:10px;
    ${props=>props.bgcolor === true && css`
    background-color:#3D6FF1;
    `};
    ${props=>props.bgcolor === false && css`
    background-color:#D79B9B;
    `};
    border-radius:0.2em;
    max-width:384px;
    text-align: center;
`;

const GoogleLogin = styled.h3`
    font-size:1.3em;
    color:#FFF;
    background-color:#3D6FF1;
    padding:0.35em;
    border-radius:0.2em;
    max-width:400px;
    text-align:center;
`;

const Buttons = ({bgcolor, text}) => {
    return <div>
        <LoginButton bgcolor = {true}>login</LoginButton>
        <LoginButton bgcolor = {false}>Sign Up</LoginButton>
    </div>
}


Buttons.defaultProps = {
    bgcolor:'#D79B9B',
    text: 'Sign Up'
}

export default Buttons;