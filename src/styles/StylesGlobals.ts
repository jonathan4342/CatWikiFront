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
        top: 0px;
        left: 0
    }
    .imgCat{
        border-radius:24px;
    }
    .conCat{
        display:grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap:2.5rem
    }
    `