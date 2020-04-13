import React from "react";
import { Container } from "../assets/styling/components/globalStyling";
import { BoxContainer, Box1, Box2, Box3, Img, H1, H2, Intro, P } from "../assets/styling/components/homeStyling";
import Profile from "../assets/images/emmaChicks.jpg";

export default function Home() {




    return (
        <Container id="homeContainer" >
            <div className="star"></div>
            <BoxContainer>
                <Box1>
                    <H1 className="appleText">Welcome</H1>
                    <Intro>
                        <P>I am a Full-Stack Developer based in Norwich, UK.</P>
                        <P>A dedicated professional with a passion for continuous development.</P>
                        <P>Creating clean code with elegant designs to enhance the user experience.</P>
                    </Intro>
                </Box1>
                <Box2>
                    <H2 to="/about" className="appleText">Bring your ideas to life</H2>
                </Box2>
                {/* <Box3>
                    <Img src={Profile} alt="Emma Andrews" />
                </Box3> */}
            </BoxContainer>
        </Container>
    );
}
