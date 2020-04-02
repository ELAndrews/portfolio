import { SOLID, MEDIA } from "../variables";
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: black;
    font-family: monospace;
`;

export const P = styled.div`
    color: white;
    letter-spacing: 2px;
`;

const blinkyblink = keyframes`
    0% { border-color: transparent}
    50% { opacity: 1}
    100%  { border-color: white}
`;

export const Blink = styled.div`
    width: 10px;
    height: 15px;
    border-bottom: 3px solid white;
    animation: ${blinkyblink} 1s 1s infinite;
`;

export const TextArea = styled.div`
width: 50%;
height: 50%;
padding-top: 100px;
margin: 0px auto;
display: flex;
flex-wrap: wrap;
`;

