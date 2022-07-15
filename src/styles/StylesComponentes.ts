import styled from 'styled-components';

interface Props {
    backgroundColor?: string,
    border?: string
}
interface PropsSCH {
    paddingTop?: string,
    paddingBottom?: string,
    paddingLeft?: string,
    paddingRight?: string
}
export const BoxCont = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    padding: 1rem 5rem 0rem 5rem;
    .logo{
        width:10rem;
        height: 4rem;
        cursor:pointer;
    }
`;
export const ContainerInput = styled.div`
    display:flex;
    position:relative;
    font-weight:500;
    font-size:18px;
    >img{
        border-radius:70px 70px 0 0;
        width:100%;
    }
    .input{
        position: absolute;
        top:350px;
        left:70px;
        background-color:white;
        border-radius:20px;
        border:1px solid black;
        
    }
    .cat{
        position: absolute;
        left:70px;
        top:70px;
        color:white;
        flex-direction: row;
        width:50%;
        img{ 
            filter: brightness(0) invert(1);
            width:400px;
        }
    }
    
`;
export const ContainerDivs = styled.div`
    display:flex;
    background-color:#E3E1DC;
    flex-direction:column;
    padding:10px 70px 0px 70px;
    color:#291507;
    gap:3rem;
    height:42rem;
    border-radius:0px 0px 70px 70px;
    .div1{
        font-weight:500;
        font-size:18px;
    }
    .raya{
        width:59.18px;
        height:3.21px;
        background-color:#4D270C;
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
        font-size:48px;
        font-weight:700;
    }
    .DivBreedsMas1{
        width:50%
    }
`;
export const ButtonG = styled.button`
    display:flex;
    align-items:center;
    background-color:${({ backgroundColor }: Props) => backgroundColor ? backgroundColor : '#E3E1DC'};
    border:${({ border }: Props) => border ? border : '1px solid #E3E1DC'};
    cursor:pointer;
    color:rgba(41, 21, 7, 0.6);
    font-size:18px;
    font-weight:700;
    .arrow{
        font-size:30px
    }
`;
export const ContainerImgCats = styled.div`
    display:flex;
    flex-direction:row;
    align-items:initial;
    .raya-2{
        background-color:#DEC68B;
        height:174px;
        width:20px;
    }
`;
export const CatImgs = styled.div`
    display:flex;
    flex-direction:column;
    cursor:pointer;
    font-size:18px;
    font-family:Montserrat;
    font-weight:600;
    color:#291507;
    gap:.5rem;
    .link{
        text-decoration: none;
        color:#291507
    }
    .imgcat{
        border-radius:24px
    }
    
`;
export const ImgCats = styled.div`
    display:grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap:2rem
`;

export const ContainerSHC = styled.div`
    display:flex;
    flex-direction:row;
    padding-top:${({ paddingTop }: PropsSCH) => paddingTop ? paddingTop : '5rem'};
    padding-bottom:${({ paddingBottom }: PropsSCH) => paddingBottom ? paddingBottom : '5rem'};
    padding-left:${({ paddingLeft }: PropsSCH) => paddingLeft ? paddingLeft : '0'};
    padding-right:${({ paddingRight }: PropsSCH) => paddingRight ? paddingRight : '0'};
`;

export const SHCTexto = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    padding:60px 70px 0px 70px;
    gap:2rem;
    .raya{
        width:59.18px;
        height:3.21px;
        background-color:#4D270C;
    }
    >h1{
        font-size:48px;
        font-weight:700;
    }
    >h3{
        font-size:18px;
        font-weight:500
    }
`;
export const SCHImg = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`;
export const SCHImg1 = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    gap:1rem;
    .img3{
        padding-left:20px
    }
`;
export const FooterL = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    background-color:#000000;
    padding:0px 70px 0px 70px;
    align-items:center;
    height:120px;
    border-radius:70px 70px 0 0;
    width:1200px;
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
        span{
            font-weight:400;
        }
    }
`;
export const CatIdImg = styled.div`
    display:flex;
    flex-direction:row;
    img{
        border-radius:24px
    }
`;
