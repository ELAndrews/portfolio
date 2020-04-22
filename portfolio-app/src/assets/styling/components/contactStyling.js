import styled from "styled-components";
import { SOLID, MEDIA } from "../variables";

export const ContactContainer = styled.div`
    width: 80%;
    margin: 0px auto 150px;
`;

export const FormContainer = styled.div`
    width: 45%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 4px 6px 6px 3px ${SOLID.white};
`;

export const SubmissionContainer = styled.div`
    background-color: white;
    width: 45%;
    height: 350px;
    border-radius: 10px;
    box-shadow: 4px 6px 6px 3px ${SOLID.white};
    position: relative;
    bottom: 350px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: none;
`;