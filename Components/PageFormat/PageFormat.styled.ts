import styled from "styled-components";

export const PageFormatContainer = styled.div`
    width: 100%;
    & .pageFormat.inner{
        margin-top: 60px;
        width: 100%;
        display: flex; align-items: center; flex-direction: column;
        min-height: calc(100vh - 60px);
    }
`