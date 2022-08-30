import styled from 'styled-components';

interface Props {
    backgroundColor?: string,
    border?: string
}
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