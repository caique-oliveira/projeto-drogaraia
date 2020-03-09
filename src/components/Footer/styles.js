import styled from 'styled-components';
export const Footercontent = styled.div`
        margin-top: 2em;
    @media only screen and (max-width: 350px) {
        margin-top: 5em;
    }    
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
    @media only screen and (max-width: 1235px) {
        grid-template-columns:301px 575px 303px;
    }
    @media only screen and (max-width: 1200px) {
        grid-template-columns: 301px 555px 303px;
    }
    @media only screen and (max-width: 1185px) {
        grid-template-columns: 301px 490px 303px;
    }
    @media only screen and (max-width: 1100px) {
        grid-template-columns: 301px 458px 303px
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
        display: flex;
        flex-direction: row-reverse;

        @media only screen and (max-width: 768px) {
            display: block;
        }
    }
                    
`;
