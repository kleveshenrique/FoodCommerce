import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;

  > section {
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 2rem 0.5rem;

    
    img {
      width: 10rem;
      margin-bottom: 2rem;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: left;
      
      gap: 2rem;

      &:first-child{
        color:${({theme})=>theme.colors.yellow}
      }

     
    }
    

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 8rem;

      img {
        align-self: center;
      }
    }
  }
`
