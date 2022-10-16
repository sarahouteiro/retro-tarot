import styled from "styled-components"

export const CardModalBackdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
    animation: selectCardModalBackdrop;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @media (max-width: 500px) {
        height: 150vh;
    }
`

export const BackCardContainer = styled.div`
    animation-name: selectCardBack;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    img {
        width: 100%;
        height: auto;
    }
`

export const FrontCardContainer = styled.div`
    animation-name: selectCardFront;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    @media (max-width: 500px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 100%;
        height: auto;
    }
`

export const CardModalBody = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    grid-gap: 20px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin-top: 15vh;
    margin-left: auto;
    margin-right: auto;
    width: 700px;
    height: auto;
    padding: 20px;
    border-radius: 12px;
    color: transparent;
    z-index: 3;
    animation: selectCardModal;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 2s;

    @media (max-width: 500px) {
        margin-top: 5vh;
        grid-template-columns: 1fr;
        width: 80%;

        img {
            max-width: 100px;
        }
    }

    p {
        padding-right: 20px;
    }
`

export const Close = styled.div`
    cursor: pointer;
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0;
    animation-name: closeButton;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: 2s;

    &:hover {
        opacity: 1;
    }

    &:before, &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
`