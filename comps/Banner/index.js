import React from 'react';
import styled, {css} from 'styled-components';

const BannerBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    max-width:384px;
    min-height:135px;
    background-color:rgba(255, 255, 255, 0.88);
`;

const BannerTitle = styled.div`
    font-size:24px;
    font-weight:bold;
    padding:6px 30px;
`;

const BannerSubTitle = styled.div`
    font-size:14px;
    color:#3D5AF1;
    padding:6px 30px;
`;

const Banner = ({color, highlight}) => {
    return <BannerBox>
        <BannerTitle>Hack your way to learning</BannerTitle>
        <BannerSubTitle>Start your free account today.</BannerSubTitle>
    </BannerBox>   
}

Banner.defaultProps = {
}

export default Banner;