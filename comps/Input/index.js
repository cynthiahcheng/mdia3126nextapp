import React from 'react';
import styled, {css} from 'styled-components';

const InputBox = styled.div`
    display:flex;
    flex-direction:column;
`;

const InputTitle = styled.div`
    font-size:18px;
    color:#686868;
`;

const EmailInput = styled.div`
    font-size:18px;
    padding:0.35em 0.8em;
    background-color:#F2F4FB;
    border-radius:0.2em;
    max-width:370px;
    margin:3px 0 10px 0;
`;

const Input = ({text}) => {
    return <InputBox>
        <InputTitle>EMAIL</InputTitle>
        <EmailInput>joe@gmail.com</EmailInput>
        <InputTitle>PASSWORD</InputTitle>
        <EmailInput><strong>. . . . . . . . .</strong></EmailInput>
    </InputBox>
}


Input.defaultProps = {
    
}

export default Input;