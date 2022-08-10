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
    
    `