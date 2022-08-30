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
export const ContainerInput = styled.div`
    display:flex;
    position:relative;
    font-weight:500;
    font-size:18px;
    @media (max-width:640px) {
        font-size:7px;
    }
    /* @media (max-width:768px) {
        font-size: 11px;
    } */
    >img{
        border-radius:70px 70px 0 0;
        width:100%;
    }
    
    .cat{
        position: absolute;
        left:70px;
        top:70px;
        color:white;
        flex-direction: row;
        width:50%;
        @media (max-width:350px) {
            top:5px;
            left: 20px;
        }
        @media (max-width:420px){
            top:5px;
            left: 20px;
        }
        @media (max-width:640px) {
            left:30px;
            top: 30px;
        }
        /* @media (max-width:768px) {
            left: 20px;
            top:20px
        } */
        img{ 
            filter: brightness(0) invert(1);
            width:25rem;
            @media (max-width:350px){
                width: 5rem;
            }
            @media (max-width:640px) {
                width:10rem;
            }
        }
        .input{
        position: absolute;
        background-color:white;
        border-radius:20px;
        margin-top: 30px;
        width:394px;
        height:69px;
        border: 1px solid white;
        @media (max-width:640px) {
            width:150px;
            height:30px;
            margin-top: 10px;
        }
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
    @media (max-width:640px) {
        padding:4px 28px 0px 28px;
        gap:1rem;
        height:31rem;
    }
    .div1{
        font-weight:500;
        font-size:18px;
        @media (max-width:640px) {
            font-size: 12px;
            
        }
    }
    .raya{
        width:59.18px;
        height:3.21px;
        background-color:#4D270C;
        @media (max-width:640px) {
            width: 40px;
            
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
        font-size:48px;
        font-weight:700;
        @media (max-width:640px){
            font-size: 18px;
        }
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
        font-size:30px;
        @media(max-width:640px){
        font-size:20px
    }
    }
    @media(max-width:640px){
        font-size:12px
    }
`;
export const ImgCats = styled.div`
    display:grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap:2rem;
    @media(max-width:640px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap:2rem;
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
    /* gap:2rem; */
    @media (max-width:640px){
        font-size:12px
    }
    .link{
        text-decoration: none;
        color:#291507
    }
    .imgcat{
        border-radius:24px;
        width:220px; 
        height:220px;
        @media (max-width:640px){
            width:134px;
            height:134px;
            border-radius:12px;
        }
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
export const ContainerSHC = styled.div`
    display:flex;
    flex-direction:row;
    padding-top:${({ paddingTop }: PropsSCH) => paddingTop ? paddingTop : '5rem'};
    padding-bottom:${({ paddingBottom }: PropsSCH) => paddingBottom ? paddingBottom : '5rem'};
    padding-left:${({ paddingLeft }: PropsSCH) => paddingLeft ? paddingLeft : '0'};
    padding-right:${({ paddingRight }: PropsSCH) => paddingRight ? paddingRight : '0'};
    @media(max-width:640px){
        padding-top: 1rem;
        padding-bottom: 1rem;
        flex-direction: column;
    }
    .SCHImg{
        display: flex;
        flex-direction: row;
        @media (max-width:640px){
            padding-left: 25px;
        }

    }
`;
export const SHCTexto = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    padding:60px 70px 0px 70px;
    gap:2rem;
    @media(max-width:640px){
        width:100%;
        padding:20px 28px 20px 28px;
        gap:1rem;
    }
    .raya{
        width:59.18px;
        height:3.21px;
        background-color:#4D270C;
        @media(max-width:640px){
            width:50px;
        }
    }
    >h1{
        font-size:48px;
        font-weight:700;
        @media(max-width:640px){
            font-size:43px;
        }
    }
    >h3{
        font-size:18px;
        font-weight:500;
        @media (max-width:640px) {
            font-size: 15px;
        }
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
    
    .img1{
        width:273px;
        height:167px;
        @media(max-width:640px){
            width:172px;
            height:105px;
        }
    }
    .img2{
        width:195px;
        height:293px;
        @media(max-width:640px){
            width:122px;
            height:184px;
        }
    }
    .img3{
        padding-left:20px;
        width:238px;
        height:385px;
        @media(max-width:640px){
            width:149px;
            height:242px;
        }
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
export const CatIdImg = styled.div`
    display:flex;
    flex-direction:row;
    img{
        border-radius:24px
    }
`;
export const ScaleCont = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
.contTex{
    font-size:16px;
    font-weight:700;
    padding-right: 50px;
}
.contLine{
    display: flex;
    flex-direction:row;
}
`;
export const Line = styled.div`
width: 80px;
height: 12px;    
background-color: #544439;
border-radius: 8px;
margin-right: 8px;
@media (max-width: 590px) {
    width: 50px; 
}

@media (max-width: 375px) {

    width: 45px;
}
`;
export const LineNull = styled.div`
width: 80px;
height: 12px;    
background-color: #E0E0E0;
border-radius: 8px;
margin-right: 8px;
@media (max-width: 590px) {
    width: 50px; 
}

@media (max-width: 375px) {

    width: 45px;
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
.title{
    color:#000000;
    font-weight: 700;
}
`;
