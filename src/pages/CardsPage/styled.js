import styled from "styled-components"

export const Header = styled.div`
    display: flex;
    padding: 0 80px;
    align-items: center;

    @media (max-width: 500px) {
        flex-direction: column;
        padding: 0;
        justify-content: center;
        align-items: center;
    }
`

export const Titulo = styled.div`
    padding-top: 30px;
    display: flex;
    width: 86%;
    align-items: center;
    margin: 0 auto;
    @media (max-width: 500px) {
        padding-top: 0;
        width: 90%;
        height: auto;
        flex-direction: column;
    }
`

export const Logo = styled.img`
    width: 150px;
    height: auto;
    cursor: pointer;
    @media (max-width: 500px) {
        width: 200px;
    }
`

export const Title = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    @media (max-width: 500px) {
        position: relative;
        width: 100%;
        height: auto;
        margin: 20px 0 20px 0;
    }
`

export const Mesa = styled.div`
    padding-top: 50px;
    padding-bottom: 20px;
    height: auto;
    max-width: 100%;
    margin: 0 auto;
    border-radius: 10px;
    @media (max-width: 500px) {
        padding-top: 10px;
        max-width: 100%;
    }
`

export const Cartas = styled.div`
    align-items: center;
    justify-content: center;
    width: 95%;
    display: grid;
    grid-template-columns: repeat(39, 25px);
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 20px;

    img {
        max-width: 100px;
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(78, 1fr);
        grid-template-rows: 1fr;
        column-gap: 10px;
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;
        overflow-x: scroll;
        padding-top: 25px;

        &:first-child {
            padding-left: 25px;
        }
    }
`

export const ShuffleBack = styled.div`
    animation: shuffleCard;
    animation-duration: .4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`

export const ShuffleFront = styled.div`
    animation: shuffleCard;
    animation-duration: .4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    transition: all 1s ease-in-out;
    z-index: 1;

    &:hover {
        z-index: 2;
    }
`