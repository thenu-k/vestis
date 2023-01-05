import styled from "styled-components";

export const ProductsContainer = styled.div`
    width: 100%;
    & .inner.products{
        width: 95%;
        display: flex; flex-direction: column; align-items: center;
        margin: 20px 0;

        & .productGrid{
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-auto-rows: auto;
            grid-gap: 15px;
        }
    }
`