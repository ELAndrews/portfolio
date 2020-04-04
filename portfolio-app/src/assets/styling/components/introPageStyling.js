import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
    font-family: monospace;
    position: absolute;
    z-index: 3;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: flex-end;
    padding-top: 120px;
    margin: 0px auto;
`;

export const TextArea = styled.div`
    width: 50%;
    padding: 0px 0px 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
    height: 15px;
    animation: ${Blink} 1s 1s infinite;
`;

export const Sentence = styled.div`
  color: white;
`;