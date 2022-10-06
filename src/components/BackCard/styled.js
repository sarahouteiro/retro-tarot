import styled from "styled-components"

export const Carta = styled.div`
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    z-index: 1;
    &:hover {
        transform: translateY(-20px) rotateZ(-5deg); 
    }
`