import styled  from "styled-components";


export const Container = styled.button`

    width: 100%;
    height: 5rem;
    padding:2rem;
    font-size: x-large;
    font-weight: 500;
    color: ${({theme})=>theme.colors.white};
    background-color: ${({theme})=>theme.colors.green};
    border: none;
  
    
    display:flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;

        

`