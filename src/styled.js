import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #F3D253;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    @keyframes shuffleCard {
        from {
            transform: scaleX(-0);
        }
        to {
            transform: scaleX(1);
        }
    }

    @keyframes selectCardBack {
        0% {
            transform: scale(0.1);
        }
        90% {
            transform: scale(1);
        }
        100% {
            transform: scaleX(-0);
            opacity: 1;
        }
    }

    @keyframes selectCardFront {
        from {
            transform: scaleX(-0);
        }
        to {
            transform: scaleX(1);
        }
    }

    @keyframes selectCardModal {
        from {
            background-color: transparent;
            color: transparent;
        }
        to {
            background-color: #E29DC5;
            color: #000000;
        }
    }

    @keyframes selectCardModalBackdrop {
        from {
            background-color: transparent;
            opacity: 0;
        }
        to {
            background-color: #000000;
            opacity: .3;
        }
    }

    @keyframes closeButton {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    padding-top: 30px;
`