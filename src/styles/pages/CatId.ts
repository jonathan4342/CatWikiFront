import styled from 'styled-components';

export const ContainerCatId= styled.div`
    display:flex;
    flex-direction:row;
    padding-bottom:5rem;
    padding-left:10px;
    padding-right:100px;
    gap:5rem;
    @media (max-width:375px){
        padding: 0;
        flex-direction: column;
        font-size:12px;
        gap: 1rem;
    }
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
@media (max-width:375px){
    flex-direction:column;
    align-items:center;
}
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
        width:371px;
        height:371px;
        @media (max-width:375px){
            width:200px;
            height:200px
        }
    }
`;