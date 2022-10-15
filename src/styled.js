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
    @keyframes cardAnimationUp {
        from {
            transform: translateY(0px) rotateZ(0deg); 
        }
        to {
            transform: translateY(-20px) rotateZ(-5deg); 
        }
    }
    @keyframes cardAnimationDown {
        from {
            transform: translateY(-20px) rotateZ(-5deg);
        }
        to {
            transform: translateY(0px) rotateZ(0deg);
        }
    }
`

export const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    padding-top: 30px;
`