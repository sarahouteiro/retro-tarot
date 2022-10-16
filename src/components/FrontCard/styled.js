import styled from "styled-components"

export const Carta = styled.div`
    cursor: pointer;
    transition: transform 1s;
    z-index: 1;
    &:hover {
        transform: translateY(-20px) rotateZ(-5deg);
        transition: transform 0.1s;
        z-index: 2;
    }
    img {
        @media (max-width: 500px) {
            width: 165px;
        }
    }
`