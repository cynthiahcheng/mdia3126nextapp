import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const HeadTitle = styled.h1`
    font-size:24px;
    color:${props=>props.color ? props.color : "#000"};
    padding:5px;
    ${props=>props.highlight === true && css`
        margin:10px;
    `}
`;

const SubHeadTitle = styled(HeadTitle)`
    font-size:14px;
    padding:3px;
`;

const HeadBox = styled.div`
    // display:flex;
    // align-items:center;
    // justify-content:center;
`;

const Header = ({color, highlight, text}) => {
    
    return <HeadBox>
        <HeadTitle highlight={highlight}>{text}</HeadTitle>
    </HeadBox>    
}

Header.defaultProps = {
    color:null,
    highlight:null,
    text:"Welcome Back!"
}

export default Header;