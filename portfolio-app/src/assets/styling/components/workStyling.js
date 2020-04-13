import styled from "styled-components";
import { SOLID, MEDIA } from "../variables";


export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin: 20px auto;
padding: 20px;
background-color: ${SOLID.pastelGreen};
width: 100%;
`;

export const WorkContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
max-width: 800px;
width: 95%;
margin: 0px auto;
`;

export const H1 = styled.h1`
   font-size: 3rem;
   color: ${SOLID.darkGreen};
   padding-top: 20px;
   padding-bottom: 20px;
   text-align: center;
   letter-spacing: 6px;
`;

export const Title = styled.h2`
color: ${SOLID.darkGreen};
text-align: center;
`;

export const ImgSum = styled.img`
    width: 80%;
    object-fit: cover;
    margin: 20px auto;

`;

export const Summary = styled.p`
`;

export const TechnologiesSmall = styled.div`
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin: 0px auto;
  `;


export const IconBoxSmall = styled.div`
    height: 30px;
    width: 30px;
`;

export const IconImgSmall = styled.img`
height: 30px;
`;