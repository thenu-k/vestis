import styled from "styled-components";

export const ProductTemplateContainer = styled.div`
    width: 100%;
    display: flex; align-items: center;
    flex-direction: column;
    cursor: pointer;
    & .image{
        width: 100%;
        height: 30vw;
        border-radius: 5px;
        background-size: cover; background-position: center;
        background-repeat: no-repeat;
    }
    & .details{
        margin: 20px 0;
        width: 100%;
        display: flex; flex-direction: column;
        & >*{
            width: 100%;
            display: flex; align-items: flex-start;
            &:first-of-type{
                margin-bottom: 10px;
            }
        }
        & .title p{
            width: 100%;
            font-size: 1.1em;
            font-weight: 600;
            text-align: left;
        }
        & .price p{
            width: 100%;
            text-align: left;
        }
    }
`