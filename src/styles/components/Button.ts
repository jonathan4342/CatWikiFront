import styled from 'styled-components';

interface Props {
    backgroundColor?: string,
    border?: string
}
export const ButtonG = styled.button`
    display:flex;
    align-items:center;
    background-color:${({ backgroundColor }: Props) => backgroundColor ? backgroundColor : '#E3E1DC'};
    border:${({ border }: Props) => border ? border : '0.063rem solid #E3E1DC'};
    cursor:pointer;
    color:rgba(41, 21, 7, 0.6);
    font-size:1.125rem;
    font-weight:700;
    a{
        text-decoration:none;
        color:rgba(41, 21, 7, 0.6);
    }
    .arrow{
        font-size:1.875rem;
        @media(max-width:640px){
        font-size:20px
    }
    }
    @media(max-width:640px){
        font-size:12px
    }
`;