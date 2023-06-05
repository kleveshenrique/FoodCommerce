import { darken } from "polished";
import styled  from "styled-components";


export const Container = styled.button`

    width: 100%;
    height: 5rem;
    padding:2rem;
    font-size: x-large;
    font-weight: 700;
    color: ${({theme})=>theme.colors.white};
    background: ${({theme})=>theme.colors.red};
    border: none;
    border-radius: 2rem;
  
    
    display:flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;  

    transition: background 0.2s;
    
    &:hover{
        background: ${darken(0.1, '#23DB42')};
    }

`