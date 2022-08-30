import styled from 'styled-components';

export const BoxCont = styled.div`
display:flex;
flex-direction:column;
position:absolute;
padding: 0 5px;
width:100%;
gap:2rem;
@media (max-width:350px) {
    gap:1rem
}
@media (min-width:1200px){
    padding: 1rem 5rem 0rem 5rem;
}
.logo{
    width:10rem;
    height: 4rem;
    cursor:pointer;
    @media (max-width:350px){
        width:7rem;
    }
}
.h1{
    font-weight:600;
    font-size:2.25rem;
}
`;