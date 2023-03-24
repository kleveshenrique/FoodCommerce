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
        
        padding: auto;
        position: relative;
       
                
       padding: 1px;
        
        span {
          
          top: 0;
          right: 1.5;
          margin-bottom: 0;
          color: yellow;
          font-size: 1.5rem;
          
        }
       
        
        img {
          margin-top: 0;
          width: 3rem;
          height: 3rem;   
          
          :hover {
            cursor: pointer;            
          }
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
