import styled from "styled-components";

export const Filters = styled.div`
    width: 100%;
    & .filters.inner{
        width: 100%;
        display: flex; flex-direction: row; align-items: center;
        margin: 0 0 20px 0;
        justify-content: space-between;
        & .seperator{
            display: flex; flex-direction: row; align-items: center;
            flex-wrap: wrap;
            & .drop-down{
                position: relative;
                width: 150px;
                &:first-child{
                    margin-right: 10px;
                }
                & button{
                    padding: 15px 0;
                    width: 100%;
                    background-color: #eeeeee;
                    /* border-radius: 5px; */
                    cursor: pointer;
                    font-size: 0.9em;
                    font-weight: 500;
                    border:2px solid black;
                }
                & .drop-down-content{
                    display: none;
                    position: absolute;
                    z-index: 999;
                    top: 100%;
                    left: 0;
                    height: 200px; width: 150px;
                    overflow: scroll;
                    background-color: white;
                    border:2px solid black;
                    /* border-radius: 0 0px 5px 5px; */
                }
                &:hover{
                    & .drop-down-content{
                        display: flex;
                        flex-direction: column; align-items: flex-start;
                    }
                    & button{
                        /* border-radius: 5px 5px 0 0; */
                    }
                }
            }
        }
    }
`