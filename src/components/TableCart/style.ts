import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.div`
    width: 100%;
    background-color: ${theme.colors.black};
    padding: 1rem;

    table{       
        width:100%;
        border-spacing: 0 0;
        border-collapse: collapse;

        th{
            font-weight: 500;
            font-size: 1.125rem;
            text-align: left;
            padding: 0 1rem 0.5rem 1rem;
            text-transform: uppercase;

            &:nth-child(2){
                padding-left: 2rem;
            }
        }
            
     
        
        tbody{     

            td {
                padding: 1.5rem 1rem 1.5rem 1rem;                
                border-bottom: 1px solid ${({theme})=>theme.colors.gray600};

                h4{
                    font-weight: 400;
                    font-size: 1.125rem;
                    margin-bottom: 0.5rem;
                }

                > span{
                    font-weight: 700;
                    font-size: 1.5rem;
                }

                &:first-child{
                    width: 7.5rem;
                    padding-left: 0;
                    padding-right: 0;

                    img{
                        object-fit: cover;
                        width: 7.5rem;
                        height: 7.5rem; 
                        border-radius: 8px;
                    }
                }

                &:nth-child(2){
                    padding-left: 2rem;
                }

                &:nth-child(3),
                &:nth-child(4){
                    width: 11rem;
                }

                &:last-child{
                    width: 1.5rem;
                    padding-left: 0;

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