import styled from 'styled-components';

export const ScaleCont = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
.contTex{
    
    font-weight:700;
    padding-right: 3.125rem;
    @media (max-width:375px) {
    font-size:12px;
}
    @media (min-width: 720px) {
        font-size:16px;
}
}
.contLine{
    display: flex;
    flex-direction:row;
}
`;
export const Line = styled.div`
    height: 0.75rem; 
    background-color: #544439;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
    @media (min-width: 375px) {
    width: 20px; 
}
    @media (min-width: 720px) {
    width: 80px;
}
`;
export const LineNull = styled.div`
    height:  0.75rem;    
    background-color: #E0E0E0;
    border-radius:  0.5rem;
    margin-right:  0.5rem;
    @media (min-width: 375px) {
    width: 20px;
}
    @media (min-width: 720px) {
    width: 80px;
}
`;