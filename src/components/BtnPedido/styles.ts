import { darken } from "polished";
import styled  from "styled-components";


export const Container = styled.button`

    width: 25rem;
    height: 2rem;
    padding:2rem 1rem;
    font-size: x-large;
    font-weight: 700;
    color: ${({theme})=>theme.colors.white};
    background: ${({theme})=>theme.colors.red};
    border: none;
    border-radius: 2rem;
    margin: auto;
  
    
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 1rem;
    z-index: 9999;  

    transition: background 0.2s;
    
    &:hover{
        background: ${darken(0.1, '#E03131')};
    }
    

`