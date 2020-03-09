import styled from 'styled-components';
export const Footercontent = styled.div`
    margin-top: 2em;
  
`
export const Container = styled.div`

                
`;
export const Grid = styled.div`

    display: grid;
    grid-template-columns: 301px 631px 303px;
    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
    @media only screen and (max-width: 1230px) {
        grid-template-columns:301px 575px 303px;
    }
    .img1-footer {
        padding-right: 10px;
    }
    p{
        font-size: 1.4rem;
        line-height: 40.5px;
        color: #868686; 
    }
    .item.item-3 {
        padding-left: 28em;
        @media only screen and (max-width: 1230px) {
            padding-left: 23em;
            
        }
        @media only screen and (max-width: 768px) {
            padding: 0;
        }
    }
                    
`;
