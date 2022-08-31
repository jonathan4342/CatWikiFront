import styled from 'styled-components';

interface PropsSCH {
    paddingTop?: string,
    paddingBottom?: string,
    paddingLeft?: string,
    paddingRight?: string,
    gap?:string,
    flexDirection?: string,
    alignItems?: string
}
export const ContainerInput = styled.div`
    display:flex;
    position:relative;
    font-weight:500;
    font-size:18px;
    @media (max-width:640px) {
        font-size:7px;
    }
    @media (max-width:375px){
        font-size:5px;
    }
    >img{
        border-radius:70px 70px 0 0;
        width:100%;
    }
    
    .cat{
        position: absolute;
        left:30px;
        top:30px;
        color:white;
        flex-direction: row;
        width:50%;
        @media (max-width:375px) {
            top:20px;
            left: 25px;
        }
        img{ 
            filter: brightness(0) invert(1);
            width:25rem;
            @media (max-width:375px){
                width: 5rem;
            }
            /* @media (max-width:640px) {
                width:10rem;
            } */
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
        @media (max-width:375px){
            width:125px;
            height:20px;
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
    @media (max-width:375px){
        height:25rem;
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
export const ImgCats = styled.div`
    display:grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap:2rem;
    @media(max-width:640px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap:1rem;
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
    @media (max-width:640px){
        font-size:12px
    }
    @media (max-width:375px){
        font-size:9px
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
        @media (max-width:375px){
            width:90px;
            height:90px;
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
    flex-direction:${({flexDirection}:PropsSCH)=> flexDirection?flexDirection:'row'};
    padding-top:${({ paddingTop }: PropsSCH) => paddingTop ? paddingTop : '5rem'};
    padding-bottom:${({ paddingBottom }: PropsSCH) => paddingBottom ? paddingBottom : '5rem'};
    padding-left:${({ paddingLeft }: PropsSCH) => paddingLeft ? paddingLeft : '0'};
    padding-right:${({ paddingRight }: PropsSCH) => paddingRight ? paddingRight : '0'};
    gap:${({ gap }: PropsSCH) => gap ? gap : '0'};
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
        @media (max-width:375px){
            padding-left: 0px;
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
    @media (max-width:375px){
        width:100%;
        padding:10px 14px 10px 14px;
        gap:1rem
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
        @media(max-width:375px){
            font-size:27px;
        }
    }
    >h3{
        font-size:18px;
        font-weight:500;
        @media (max-width:640px) {
            font-size: 15px;
        }
        @media(max-width:375px){
            font-size:10px;
        }
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
        width:238px;
        height:385px;
        @media(max-width:640px){
            width:149px;
            height:242px;
        }
    }
`;