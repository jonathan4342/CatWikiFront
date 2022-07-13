import styled from 'styled-components';

export const BoxCont = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
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
        dispay:flex;
        flex-direction: row;
        width:50%;
        img{ 
            filter: brightness(0) invert(1);
            width:400px;
        }
    }
    
`;
export const ContainerDivs=styled.div`
    display:flex;
    background-color:#E3E1DC;
    flex-direction:column;
    padding:10px 70px 0px 70px;
    color:#291507;
    gap:2rem;
    height:42.9rem;
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
export const DivBreedsMas=styled.div`
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
export const ButtonG=styled.button`
    display:flex;
    align-items:center;
    background-color:#E3E1DC;
    border:1px solid #E3E1DC;
    cursor:pointer;
    color:rgba(41, 21, 7, 0.6);
    font-size:18px;
    font-weight:700;
    .arrow{
        font-size:30px
    }
`;