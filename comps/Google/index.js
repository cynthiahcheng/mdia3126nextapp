import React from 'react';
import styled, {css} from 'styled-components';


const GoogleLoginBox = styled.div`
   
    
`;

const GoogleLogin = styled.h4`
    font-size:1em;
    color:#FFF;
    text-align:center;
    background-color:#3D6FF1;
    border-radius:0.2em;
    align-items:center;
    justify-content:center;
    max-width:400px;
    padding:10px;

        .image {
            position:relative;
            top:10px;
        }
    

`;

const Google = ({}) => {
    return <GoogleLoginBox>
        <img className="image" src="googlelogo.png"/>
        <GoogleLogin>Login with Google</GoogleLogin>
    </GoogleLoginBox>
    
}


Google.defaultProps = {

}

export default Google;