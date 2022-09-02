import styled from 'styled-components';

export const ContainerCatId= styled.div`
    display:flex;
    gap:2rem
`;
export const CatDetails = styled.div`
display:flex;
flex-direction: column;
gap:2rem;
`;
export const ContDivCat = styled.div`
display:flex;
flex-direction:row;
gap:.5rem;

.title{
    color:#000000;
    font-weight: 700;
}
`;
export const CatIdImg = styled.div`
    display:flex;
    flex-direction:row;
    img{
        border-radius:24px
    }
    .idimg{
        width:23.188rem;
        height:23.188rem;
    }
`;