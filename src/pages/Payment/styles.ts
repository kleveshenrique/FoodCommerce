import styled from "styled-components";



export const Container = styled.main`
  width: 100%;  
  max-width: 58.75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column; 

  header {     
    width: 100%;     
    padding: 1.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 10rem;     
      
    }    

    /* @media (max-width:'720px'){
      
      header{
        padding: 1.5rem;
      }
    } */
  }
`

export const Inner = styled.main`
    border-radius: 8px;
    width: 100%;       
    background: ${({theme})=>theme.colors.black};
    padding: 2rem 2.5rem;

`

export const Form = styled.form`
  width: 100%;  
  

  h1{
    font-size: x-large;
    text-align: center;
    
  }
  
  .field{
    display: flex;   
    flex-grow: 1;
    flex-direction: column;     
    

    label {
      margin:0.5rem 0;
      color: ${({theme})=>theme.colors.white};
    }

    input,select{
      width: 100%;
      height: 42px;      
      color: ${({theme})=>theme.colors.white};
      background:${({theme})=>theme.colors.gray800};
      border: 1px solid transparent;
      margin:0 0 1rem;
      padding: 0.7rem;
      font-size: large;
      border-radius: 4px;

      transition: all 0.3s;      
    }

    span {
      color: ${({theme})=>theme.colors.red};
    }

    #zipcode{
        width: 120px;
    }
  }

  .groupField{
      width: 100%;
      display: flex;       
      flex-grow: 1;
      justify-content: space-between;
      gap: 1rem;
      
  }

  fieldset{
    margin: 1rem 0;
    border: 1px solid ${({theme})=>theme.colors.gray700};
  }

  @media (max-width: 728px){
    .groupField{
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`