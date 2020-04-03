import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
    font-family: monospace;
`;

export const TextArea = styled.div`
    width: 70%;
    padding: 10px 0px 0px 10px;
    display: flex;
    flex-wrap: wrap;
`;

export const Divider = styled.div`
    width: 50%;
`;

export const Blink = keyframes`
    0% {
        border-right: none
    }
    50% {
        border-right: 6px solid white;
    }
    100% {
        border-right: none
    }
`;

export const Curser = styled.div`
    animation: ${Blink} 1s 1s infinite;
`;

export const Sentence = styled.div`
  color: white;
`;