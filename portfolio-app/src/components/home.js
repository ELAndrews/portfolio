import React from "react";
import { Container } from "../assets/styling/components/globalStyling";
import { BoxContainer, Sentence, Sentence1, ImgBack, ArrowContainer, Arrow } from "../assets/styling/components/homeStyling";
import Woman from "../assets/images/woman.png"


export default function Home() {

    const handleClick = e => {
        window.scrollBy(0, window.innerHeight - 100)
    }
    return (
        <Container >
            <BoxContainer>

                <Sentence1>Hi, I'm Emma Andrews</Sentence1>

                <Sentence>Full-Stack Developer</Sentence>


                <ImgBack src={Woman} alt="frame" />
                <Arrow onClick={handleClick}></Arrow>
            </BoxContainer>
            <ArrowContainer></ArrowContainer>
        </Container>
    );
}
