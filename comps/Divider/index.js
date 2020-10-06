import React from 'react';
import styled, {css} from 'styled-components';

const DividerBox = styled.div`
    display:flex;
    margin:50px 0;
    div {
        font-size:16px;
        padding:0 8px;
        align-self:center;
    }
`;

const DividerLineBox = styled.div`

`;

const DividerLine = styled.div`
    border: 1.5px solid #C6C6C6;
    background-color:#C6C6C6;
    min-width:150px;
`;

const Divider = ({}) => {
    return <DividerBox>
            <DividerLineBox>
                <DividerLine></DividerLine>
            </DividerLineBox>
            <div>or</div>
            <DividerLineBox>
                <DividerLine></DividerLine>
            </DividerLineBox>
        </DividerBox>
}


Divider.defaultProps = {

}

export default Divider;