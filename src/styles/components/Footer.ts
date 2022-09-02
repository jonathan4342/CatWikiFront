import styled from 'styled-components';



export const FooterL = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    background-color:#000000;
    padding:0 4.375rem 0 4.375rem;
    align-items:center;
    height:7.5rem;
    border-radius:4.375rem 4.375rem 0 0;
    width:100%;
    .cat{
            filter: brightness(0) invert(1);
    }
    div{
        color:white;
        font-weight:700;
        font-size:1.125rem;
        display:flex;
        align-items: center;
        gap:.5rem;
        span{
            font-weight:400;
        }
    }
`;