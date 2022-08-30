import styled from 'styled-components';

export const ScaleCont = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
.contTex{
    font-size:16px;
    font-weight:700;
    padding-right: 50px;
}
.contLine{
    display: flex;
    flex-direction:row;
}
`;
export const Line = styled.div`
width: 80px;
height: 12px;    
background-color: #544439;
border-radius: 8px;
margin-right: 8px;
@media (max-width: 590px) {
    width: 50px; 
}

@media (max-width: 375px) {

    width: 45px;
}
`;
export const LineNull = styled.div`
width: 80px;
height: 12px;    
background-color: #E0E0E0;
border-radius: 8px;
margin-right: 8px;
@media (max-width: 590px) {
    width: 50px; 
}

@media (max-width: 375px) {

    width: 45px;
}

`;