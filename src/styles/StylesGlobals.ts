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
        padding: 1rem 5rem 0rem 5rem;
        background-color: white;
        font-family:'Montserrat';
    }
    * {
        margin: 0;
        padding: 0;
    }
    
    `