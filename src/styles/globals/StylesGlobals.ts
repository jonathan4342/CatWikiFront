import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body{
        margin: 0;
        background-color: white;
        font-family:'Montserrat';
        color:#291507;
    }
    * {
        margin: 0;
        padding: 0;
    }
    .withOpacity {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff9;
        position: fixed;
        top: 0;
        left: 0
    }
    .imgCat{
        border-radius:1.5rem;
        @media (min-width:375px){
            width:100px;
            height:100px;
        }
        @media (min-width:720px){
            width:278px; 
            height:278px;
        }
    }
    .conCat{
    @media (min-width:375px){
        grid-template-columns: repeat(2,minmax(0, 1fr));
        gap:3rem
    }
    @media (min-width:720px){
        display:grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap:2rem;
    }
}
.otherPhotos{
    font-weight:600;
    font-size:2.25rem;
    @media (min-width:375px){
        font-size: 20px;
    }
}
`;
