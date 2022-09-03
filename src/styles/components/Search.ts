import styled from 'styled-components';

export const ContSearch=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color:#291507;
background-color:#FFFFFF;
position:absolute;
top:22rem;
width:24rem;
border-radius: 1.5rem ;
padding-top: 1rem;
/* padding-right: 1rem; */
ul{
    width: 23rem;
    overflow-y:scroll;
    height: 10rem;
    ::-webkit-scrollbar{
    background-color:#F2F2F2;
    width:0.267rem;
    
}
::-webkit-scrollbar-thumb{
    background-color:#BDBDBD;
    border-radius:1.5rem
}
}
li{
    padding-left: 1.5rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    cursor:pointer;
    :hover{
        background-color: #9797971A;
    }
}

`;