import styled from "styled-components"

export const CartasDiv = styled.div`   
    padding-top: 30px;
    text-align: center;
`

export const Titulo = styled.div`
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    width: 1000px;
    text-align: center;
    margin: 0 auto;
    @media (max-width: 500px) {
        width: 90%;
        height: auto;
        flex-direction: column;
    }
`

export const Title = styled.img`
    width: 600px;
    @media (max-width: 500px) {
        width: 100%;
        height: auto;
        margin: 20px 0 20px 0;
    }
`

export const Mesa = styled.div`
    padding-top: 50px;
    padding-bottom: 20px;
    height: auto;
    max-width: 1000px;
    margin: 0 auto;
    border-radius: 10px;
`

export const Cartas = styled.div`
    align-items: center;
    justify-content: center;
    width: 86%;
    display: grid;
    grid-template-columns: repeat(40, 30px);
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 20px;
    @media (max-width: 500px) {
        overflow-x: scroll;
        margin: 0 auto;
        display: flex;
        column-gap: 10px;
        padding: 0 15px 0 15px;
    }
`