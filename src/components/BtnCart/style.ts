import { darken } from 'polished'
import styled from "styled-components";

export const Container = styled.div`
position:absolute;
top:3rem;
right:1.5rem;

max-width:15rem;
height:3rem;
background-color: ${({theme})=> theme.colors.red};;
font-weight:500;
font-size:1.125rem;
border-radius:1.5rem;

&:hover {
    background: ${darken(0.1, '#AA2424')};
}

.link {
    display:flex;
    align-items:center;
    justify-content:center;
    gap:2rem;
    padding-left:1rem;
    padding-right:0.5rem;

        
    svg {        
        width:3rem;
        height:3rem;              
    }
    span{
        margin-right:0.5rem;
    }

    span:nth-child(1) {
        display: block;
        text-align:center;

        margin-right:0.5rem;
        font-size:1rem;       
        
    } 

    
}
    

`