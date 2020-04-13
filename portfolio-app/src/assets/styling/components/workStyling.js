import styled from "styled-components";
import { SOLID, MEDIA } from "../variables";


export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin: 20px auto;
padding: 20px;
background-color: ${SOLID.pastelGreen};
`;

export const WorkContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

export const H1 = styled.h1`
   font-size: 3rem;
   color: ${SOLID.darkGreen};
   padding-top: 20px;
   padding-bottom: 20px;
   text-align: center;
   letter-spacing: 6px;
`;

export const WorkCard = styled.div`
    width: 30%;
    margin: 10px 10px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    text-align: center;
`;

export const Title = styled.h2`
color: ${SOLID.darkGreen};
`;

export const WorkFull = styled.div`
`;

export const ImgSum = styled.img`
    width: 100%;
    object-fit: cover;

`;

export const Summary = styled.p`
`;
