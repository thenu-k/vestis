import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    box-shadow:0 0 5px #bcbcbc;
    & .inner{
        height: 100%;
        width: 95%;
        display: flex; align-items: center;
        & > *{
            height: 100%
        }
        &:first-child{
            & h2{
                font-size: 1.5em;
                font-weight: 600;
                letter-spacing: 1px;
                height: 100%;
                padding-right: 10px;
            }
        }
        & .inputContainer{
            display: none;
            margin-left: 30px;
            width: 30%;
            & input{
                background-color: white;
                /* font-weight: 300; */
                box-sizing: border-box;
                width: 100%;
                height: 2em;
                padding: 0 20px;
                border:1px solid #b9b9b9;
                border-radius: 5px;
                &:focus{
                    outline: 0;
                }
            }
        }
        & ul{
            height: 100%;
            display: flex;
            margin-left: auto;
            & li{
                height: 100%;
                & > *{
                    display: flex; justify-content: center; align-items: center;
                    height: 100%; width: 100px;
                    box-sizing: border-box;
                    background-color: white;
                    cursor: pointer;
                    &:hover{
                        background-color: #eeeeee;
                    }
                }
                &.buttonContainer{
                    position: relative;
                    & span{
                        position: absolute;
                        z-index: 1000;
                        right: 0;
                        width: 20px; height: 20px;
                        border-radius: 9999px;
                        font-size: 0.8em;
                        background-color: red;
                        color: white;
                    }
                }
            }
        }
    }
`