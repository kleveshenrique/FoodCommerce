import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.div`
    width: 100%;
    background-color: ${theme.colors.black};
    padding: 2rem 0.5rem;
    box-sizing: border-box;

    table{       
        width:100%;
        border-spacing: 0 0;
        border-collapse: collapse;
        
        th{
            font-weight: 500;
            font-size: 1rem;
            text-align: center;
            padding: 0;
            text-transform: uppercase;

            &:nth-child(2){
                padding-left: 1.5rem;
                
            }
        }
            
     
        
        tbody{     

            td {
                padding: 0.5rem;         
                border-bottom: 1px solid ${({theme})=>theme.colors.gray600};
                width: 100%;
                

                h4{
                    font-weight: 500;
                    font-size: 1.125rem;
                    margin-bottom: 0.5rem;
                }

                > span{       
                    font-weight: 500;      
                    font-size: 1rem;
                }

                &:first-child{
                    width: 7.5rem;
            
                    img{
                        object-fit: cover;
                        width: 6.5rem;
                        height: 6.5rem; 
                        border-radius: 8px;
                        
                    }
                }

                .sectionQuantity{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;

                    button{
                        width: 100%;   
                        border:none;                   
                        background: none;
                        border-radius: 50%;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        svg{     
                            fill: ${({theme})=>theme.colors.yellow};         
                            width: 1.5rem;
                            height: 1.5rem;
                        }
                    }
                    
                }

                &:nth-child(2){                    
                    padding-left: 1rem;                   
                }

                &:nth-child(3),
                &:nth-child(4){
                    width: 5rem;
                }

                &:last-child{
                    width: 1.5rem;                                      

                    button{
                        width: 100%;
                        border: none;
                        background: none;

                        display: flex;
                        align-items: center;
                        justify-content: flex-end;

                        svg{
                            fill: ${({theme})=>theme.colors.yellow};
                            width: 1.5rem;
                            height: 1.5rem;
                        }
                    }
                }
                
            }

            tr:last-child td {
                border-bottom: none;
            }          
            /* img {
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
            }
            tr{
                height: 100%;
            }

            tr:not(:last-child) {
               
                border-bottom: 1px solid ${theme.colors.gray700};

                
            }

            td:first-child { 
                width: 150px;
                text-align:center; 
            } */
            
            
        }
    }
`