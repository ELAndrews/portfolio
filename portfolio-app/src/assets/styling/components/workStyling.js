import styled from "styled-components";
import { SOLID, MEDIA } from "../variables";


export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin: 0px auto;
padding: 20px 20px 50px 20px;
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

export const Title = styled.h2`
color: ${SOLID.darkGreen};
text-align: center;
margin: 5px auto 15px;
`;

export const ImgSum = styled.img`
    width: 40%;
    max-width: 400px;
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

export const ArrowContainer = styled.div`
    border-top: 15vh solid ${SOLID.pastelGreen};
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
`;

export const ArrowContainerTop = styled.div`
    border-top: 15vh solid white;
    border-left: 50vw solid ${SOLID.pastelGreen};
    border-right: 50vw solid ${SOLID.pastelGreen};
`;