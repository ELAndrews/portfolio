import React from "react";
import { Container } from "../assets/styling/components/globalStyling";
import { H1, AboutContainer, Technologies, IconBox, IconImg, IconName, TechnologiesSmall, IconBoxSmall, IconImgSmall, Summary, Bullets } from "../assets/styling/components/aboutStyling"
import { technologies, bullets } from "../assets/data/aboutData"

export default function About() {

    return (
        <Container>
            <H1 className="appleText">About</H1>
            <AboutContainer>
                {/* Mobile and larger */}
                <Technologies>
                    {
                        technologies.map((curr, index) => {
                            return (
                                <IconBox key={index}>
                                    <IconImg src={curr.icon} alt={curr.name} />
                                    <IconName className="iconName">{curr.name}</IconName>
                                </IconBox>
                            )
                        })
                    }
                </Technologies>
                <div>
                    <Summary>
                        <p> Write a short 2 or 3 sentence summary</p>
                    </Summary>
                    <Bullets>
                        {}
                    </Bullets>
                </div>
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
