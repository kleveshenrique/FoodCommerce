import styled from "styled-components";

export const Container =  styled.div`
    width: 100%;  
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        
    .btnBack {
        background: ${({theme})=>theme.colors.red};
        border: none;
        font-weight: 700;
        font-size: x-large;
        color:${({theme})=>theme.colors.white};
        padding: 1rem 2rem;
        border-radius: 2rem;

        transition: background 0.2s;

        &:hover{
            background:${({theme})=>theme.colors.green};
            //filter: brightness(50%);
        }
    }

    img {
        width: 15rem;
        height: 15rem;
       
    }

`