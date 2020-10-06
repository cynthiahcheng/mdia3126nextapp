import React, {useState} from 'react';
import Header from '../Header';
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

const SignupButton = styled.h3`
    font-size:1.3em;
    color:#FFF;
    background-color:#D79B9B;
    padding:0.35em;
    border-radius:0.2em;
    max-width:388px;
    text-align:center;
`;

const SignUp = ({}) => {

    // const [signup, setSignUp] = useState("Signup for an account");

    return <InputBox>
        <Header text={"Signup for an account"}/>
        <InputTitle>EMAIL</InputTitle>
        <EmailInput>joe@gmail.com</EmailInput>
        <InputTitle>PASSWORD</InputTitle>
        <EmailInput><strong>. . . . . . . . .</strong></EmailInput>
        <InputTitle>CONFIRM PASSWORD</InputTitle>
        <EmailInput><strong>. . . . . . . . .</strong></EmailInput>
        <SignupButton>Sign up</SignupButton>
    </InputBox>
}


SignUp.defaultProps = {

}

export default SignUp;