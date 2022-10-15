import styled from "styled-components"

export const BotaoDiv = styled.div`
    width: 900px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 70px 0 20px 0;
    @media (max-width: 500px) {
        flex-direction: column;
        max-width: 300px;
        row-gap: 10px;
    }
`

export const Container = styled.div`
    text-align: center;
    width: 950px;
    margin: 0 auto;
    display: flex;
    background-color: #DC98BD;
    border-radius: 50px;
    border: 3px groove #E54F24;
    @media (max-width: 500px) {
        max-width: 350px;
        flex-direction: column;
    }
`

export const ImageDiv = styled.div`
    margin: 100px 0 0 100px;
    padding-bottom: 100px;
    @media (max-width: 500px) {
        text-align: center;
        margin: 0 auto;
        padding-top: 50px;
        padding-bottom: 20px;
    }
`

export const TextDiv = styled.div`
    width: 500px;
    text-align: center;
    justify-content: center;
    margin: 120px 0 0 80px;
    padding-bottom: 100px;
    @media (max-width: 500px) {
        max-width: 300px;
        margin: 0 auto;
        padding-bottom: 50px;
    }
`