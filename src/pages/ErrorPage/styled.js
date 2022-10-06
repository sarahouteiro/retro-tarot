import styled from "styled-components"

export const Container = styled.div`
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    max-width:500px;
    @media (max-width: 500px) {
        max-width: 300px;
    }
`

export const Error = styled.img`
    margin-top: 200px;
    width: 500px;
    margin-bottom: 50px;
    @media (max-width: 500px) {
        max-width: 300px;
    }
`