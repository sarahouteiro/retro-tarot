import styled from "styled-components"

export const HomePageDiv = styled.div`
    margin-top: 50px;
    text-align: center; 
    img {
        height: 500px;
        @media (max-width: 500px) {
            width: 100%;
            height: auto;
        }
    }
    p {
        color: #231F20;
        margin-top: -100px;
        margin-bottom: 100px;
        font-size: 20px;
        @media (max-width: 500px) {
            margin-top: -50px;
            padding: 0 10px 0 10px;
        }
    }
`