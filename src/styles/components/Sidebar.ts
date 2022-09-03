import styled from 'styled-components';

interface PropsSCH {
    paddingTop?: string,
    paddingBottom?: string,
    paddingLeft?: string,
    paddingRight?: string,
    gap?: string,
    flexDirection?: string,
    alignItems?: string
}
export const ContainerInput = styled.div`
    display:flex;
    position:relative;
    font-weight:500;
    font-size:1.25rem;
    >img{
        border-radius:4.375rem 4.375rem 0 0;
        width:100%;
    }
    
    .cat{
        position: absolute;
        left:1.875rem;
        top:5.5rem;
        color:white;
        flex-direction: row;
        width:50%;
        img{ 
            filter: brightness(0) invert(1);
            width:25rem;
        }
        .search{
        height:4.313rem;
        background-color:white;
        width:24.664rem;
        position: absolute;
        border-radius: 3.688rem;
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        align-items:center;
        margin-top: 2rem;
        .iconSearch{
            width: 20%;
            color:black;
            cursor:pointer;
            padding-left: 2rem;
        }
        }
        .input{
        width: 80%;
        height:4.313rem;
        border: 0.063rem solid white;
        font-size:1.125rem;
        font-weight:500;
        color:#291507;
        border-radius: 3.688rem;
        padding-left:2rem;
        ::placeholder{
            color:#291507;
            font-weight:500;
        }
        
    }
    }
    
`;
export const ContainerDivs = styled.div`
    display:flex;
    background-color:#E3E1DC;
    flex-direction:column;
    padding:0.625rem 4.375rem 0 1.875rem;
    color:#291507;
    gap:3rem;
    height:42rem;
    border-radius:0px 0px 4.375rem 4.375rem;
    .div1{
        font-weight:500;
        font-size:1.125rem;
    }
    .raya{
        width:3.688rem;
        height:0.188rem;
        background-color:#4D270C;
        @media (max-width:640px) {
            width: 2.5rem;
        }
    }
    .div-1{
        display:flex;
        flex-direction:column;
    }
`;
export const DivBreedsMas = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    div h2{
        font-size:3rem;
        font-weight:700;
    }
    .DivBreedsMas1{
        width:50%
    }
`;
export const ImgCats = styled.div`
    display:grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap:2rem;
    @media (max-width:640px){
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap:1rem
    }
`;
export const CatImgs = styled.div`
    display:flex;
    flex-direction:column;
    cursor:pointer;
    font-size:1.125rem;
    font-family:Montserrat;
    font-weight:600;
    color:#291507;
    .imgcat{
        border-radius:1.5rem;
        width:13.75rem; 
        height:13.75rem;
        @media (max-width:640px){
            width:11rem;
            height:11rem;
            border-radius:0.75rem;
        }
    }
    
`;
export const ContainerImgCats = styled.div`
    display:flex;
    flex-direction:row;
    align-items:initial;
    .raya-2{
        background-color:#DEC68B;
        height:10.875rem;
        width:1.25rem;
    }
`;
export const ContainerSHC = styled.div`
    display:flex;
    flex-direction:${({ flexDirection }: PropsSCH) => flexDirection ? flexDirection : 'row'};
    padding-top:${({ paddingTop }: PropsSCH) => paddingTop ? paddingTop : '5rem'};
    padding-bottom:${({ paddingBottom }: PropsSCH) => paddingBottom ? paddingBottom : '5rem'};
    padding-left:${({ paddingLeft }: PropsSCH) => paddingLeft ? paddingLeft : '0'};
    padding-right:${({ paddingRight }: PropsSCH) => paddingRight ? paddingRight : '0'};
    gap:${({ gap }: PropsSCH) => gap ? gap : '0'};
    @media(max-width:640px){
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;
export const SHCTexto = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    padding:3.75rem 1.875rem 4.375rem;
    gap:2rem;
    
    .raya{
        width:3.688rem;
        height:0.188rem;
        background-color:#4D270C;
        @media(max-width:640px){
            width:3.125rem;
        }
    }
    >h1{
        font-size:3rem;
        font-weight:700;
    }
    >h3{
        font-size:1.125rem;
        font-weight:500;
        
    }
`;
export const SCHImg = styled.div`
    display:flex;
    flex-direction:row;
`;
export const SCHImg1 = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    gap:1rem;
    .img1{
        width:17.063rem;
        height:10.438rem;
    }
    .img2{
        width:12.188rem;
        height:18.313rem;
    }
    .img3{
        width:14.875rem;
        height:24.063rem;
        padding-left: 10px;
    }
`;