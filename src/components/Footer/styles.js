import styled from 'styled-components';

export const Container = styled.div`
            margin-top: 12em;
            max-width: 1200px;
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;

            .colum1 {
                display: flex;
                float: left;
            }
            .colum3 {
                display: flex;
                float: right;
            }
            p{
                font-size: 18px;
            }

            ul{
                display: flex;       
                flex-direction: row;
                padding: 0 15em;

                @media only screen and (max-width: 768px) {
                    flex-direction: row;
                    padding: 0;
                }
            }

                
`;

