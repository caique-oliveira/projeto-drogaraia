import styled from 'styled-components';
export const Footercontent = styled.div`
    margin-top: 2em;
`

export const Container = styled.div`

            p{
                font-size: 1.4rem;
                line-height: 40.5px;
                color: #868686;  
            }

            ul{
                display: flex;
                flex-direction: row;

                li{
                    padding-right: 30px;
                    @media only screen and (max-width: 768px) {
                        padding-right: 0px;
                    }

                    .colin{
                        padding-left: 45em;

                        @media only screen and (max-width: 768px) {
                            padding-right: 0px!important;
                        }    
                    }
                    
                }
            }        
        }
                
`;

