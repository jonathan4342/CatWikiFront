import styled from 'styled-components';

export const ContainerTopCat= styled.div`
display: flex;
flex-direction:column;
align-items:flex-start;
gap:2rem
`;

export const Cat= styled.div`
display: flex;
flex-direction:row;
gap:2rem;
`;

export const CatImg= styled.div`
display: flex;
>img{
    border-radius: 1.5rem;
    height: 10.625rem;
    width: 10.625rem;
}
`;

export const CatText= styled.div`
display: flex;
flex-direction:column;
gap:1rem;
padding-top: 1rem;
`;