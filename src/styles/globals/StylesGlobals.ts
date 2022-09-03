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
    input {
    outline: none
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
        height: 17.375rem;
        width: 17.375rem;
    }
    .conCat{
        display:grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap:2rem;
        @media (max-width:640px){
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
}
ul,ol,li{
        list-style: none;
}

a{
    text-decoration:none;
    color: #291507;
}
html{
    font-size: 16px;
    @media (max-width:1920px){
        font-size:17px;
    }
    @media (max-width:1280px){
        font-size:16px;
    }
    @media (max-width:768px){
        font-size:9px;
    }
    @media (max-width:640px) {
        font-size:7px;
    }
    @media (max-width:420px){
        font-size: 6px;
    }
    @media (max-width:375px){
        font-size:5px;
    }
}
.otherPhotos{
    font-weight:600;
    font-size:2.25rem;
}
`;
