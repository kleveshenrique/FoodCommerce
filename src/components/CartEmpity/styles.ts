import styled from "styled-components";

export const Container =  styled.div`
    width: 100%;  
    height:100vh ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .btnBack {
        background: ${({theme})=>theme.colors.red};
        border: none;
        font-weight: 700;
        font-size: large;
        color:${({theme})=>theme.colors.white};
        padding: 1rem 2rem;
        border-radius: 2rem;

        transition: background 0.1s;

        &:hover{
            background:${({theme})=>theme.colors.green};
        }
    }

`