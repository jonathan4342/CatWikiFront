import styled from 'styled-components';



export const FooterL = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    background-color:#000000;
    padding:0px 70px 0px 70px;
    align-items:center;
    height:120px;
    border-radius:70px 70px 0 0;
    width:100%;
    @media(max-width:640px){
        flex-direction: column;
        justify-content: center;
        align-items:flex-start;
        padding:0px 28px 0px 60px;
    }
    .cat{
            filter: brightness(0) invert(1);
    }
    div{
        color:white;
        font-weight:700;
        font-size:18px;
        display:flex;
        align-items: center;
        gap:.5rem;
        @media(max-width:640px){
            font-size:10px;
        }
        span{
            font-weight:400;
            
        }
    }
`;