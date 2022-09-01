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
    @media(max-width:375px){
        flex-direction: column;
        justify-content: center;
        padding:0px 28px 0px 40px;
    }
    @media(max-width:640px){
        flex-direction: column;
        justify-content: center;
        padding:0;
    }
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
        @media(max-width:375px){
            font-size:10px;
        }
        @media(max-width:640px){
            font-size:10px;
        }
        span{
            font-weight:400;
        }
    }
`;