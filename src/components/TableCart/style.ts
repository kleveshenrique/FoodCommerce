import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Container = styled.div`
    width: 100%;
    background-color: ${theme.colors.black};
    padding: 1rem;

    table{       
        width:100%;
        border-collapse: collapse;

        thead {
            th{
                text-align: left;
                padding-bottom: 2rem;
            }
        }
        
        tbody{     

            
            img {
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
            }
            td:first-child + td {  width: 500px }
            td:first-child + td + td {  width: 200px }
            
        }
    }
`