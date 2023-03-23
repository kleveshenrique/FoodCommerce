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
    padding: 2rem 1.875rem;

    
    img {
      width: 10rem;
      margin-bottom: 2rem;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
       
        position: relative;
        
       padding: 1px;
        
        span {
          position: absolute;
         right: 1.3rem;
         top: 1rem;
          margin-bottom: 0;
          color: yellow;
          font-size: 1.5rem;
          
        }
       
        
        img {
          margin-top: 0;
          width: 4rem;
          height: 4rem;           
        }
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
