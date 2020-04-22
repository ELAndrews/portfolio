import React from "react";
import { Container, H1 } from "../assets/styling/components/globalStyling";
import { AboutContainer, TechnologiesSmall, IconBoxSmall, IconImgSmall, Summary, Bullets, BulletCard, BIcon, BText, BTitle, BInfo, ArrowContainer } from "../assets/styling/components/aboutStyling"
import { technologies, bullets } from "../assets/data/aboutData"


export default function About() {

    return (
        <Container >
            <H1>ABOUT</H1>
            <AboutContainer>
                <Summary>
                    <p> Write a short 2 or 3 sentence. <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Summary>
                <Bullets>
                    {bullets.map((curr, index) => {
                        return (
                            <BulletCard key={index}>
                                <BIcon><curr.icon /></BIcon>
                                <BInfo>
                                    <BTitle>
                                        <h2>{curr.head}</h2></BTitle>
                                    <BText>{curr.summary}</BText>
                                </BInfo>
                            </BulletCard>
                        )
                    })}
                </Bullets>

                {/*  Smaller mobile Technologies*/}
                <TechnologiesSmall>
                    {
                        technologies.map((curr, index) => {
                            return (
                                <IconBoxSmall key={index}>
                                    <IconImgSmall src={curr.icon} alt={curr.name} />
                                </IconBoxSmall>
                            )
                        })
                    }
                </TechnologiesSmall>
            </AboutContainer>
        </Container>
    );
}
