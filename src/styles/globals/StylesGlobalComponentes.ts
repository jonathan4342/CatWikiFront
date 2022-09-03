import styled from 'styled-components';

interface props { 
    fontSize?: string,
    fontWeight?: string,
    color?: string
}
export const BoxCont = styled.div`
display:flex;
flex-direction:column;
position:absolute;
padding: 1rem 3rem 0rem 3rem;
width:100%;
gap:2rem;

.logo{
    width:10rem;
    height: 4rem;
    cursor:pointer;
    /* @media (max-width:350px){
        width:112px;
    } */
}
.h1{
    font-weight:600;
    font-size:2.25rem;
}
`;
export const Title = styled.h1`
font-size:${({fontSize}:props)=>fontSize?fontSize:'1.25rem'};
font-weight: ${({fontWeight}:props)=>fontWeight?fontWeight:'400'};
color: ${({color}:props)=>color?color:'#291507'};

`;