import React, { useEffect } from "react";
import { Container } from "../assets/styling/components/globalStyling";
import { BoxContainer, Sentence, Sentence1, ImgBack, Box1, Box2, Box3, Img, H1, H2, Intro, P, ArrowContainer, Arrow } from "../assets/styling/components/homeStyling";
import Profile from "../assets/images/emmaChicks.jpg";
import Background from "../assets/images/small_laptop.png";
import Woman from "../assets/images/woman.png"
import Particles from "react-particles-js";


export default function Home() {

    const handleClick = e => {
        window.scrollBy(0, window.innerHeight - 100)
    }
    return (
        <Container >
            {/* <Particles
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10,
                            speed: 1
                        },
                    },
                    particles: {
                        colour: 'white',
                        opacity: 0.5,
                        size_max: 1
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "bubble",
                                resize: true
                            },
                        },
                    },
                    mode: {
                        bubble: {
                            distance: 200,
                            size: 0.3
                        }
                    }
                }} className="particles" /> */}
            <BoxContainer>

                <Sentence1>Hi, I'm Emma Andrews</Sentence1>

                <Sentence>Full-Stack Developer</Sentence>

                <ImgBack src={Woman} alt="frame" />
                <Arrow onClick={handleClick}></Arrow>
                {/* <Box1>
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
                 <Box3>
                    <Img src={Profile} alt="Emma Andrews" />
                </Box3>  */}
            </BoxContainer>
            <ArrowContainer></ArrowContainer>
        </Container>
    );
}
