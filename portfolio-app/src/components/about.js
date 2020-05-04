import React from "react";
import { Container, H1 } from "../assets/styling/components/globalStyling";
import { AboutContainer, TechnologiesSmall, IconBoxSmall, IconImgSmall, Summary, Bullets, BulletCard, BIcon, BText, BTitle, BInfo } from "../assets/styling/components/aboutStyling"
import { technologies, bullets } from "../assets/data/aboutData"


export default function About() {

    return (
        <Container >
            <H1>ABOUT</H1>
            <AboutContainer>
                <Summary>
                    <p>I am a Full-Stack Developer based in Norwich, UK. </p> <br />
                    <p>I am passionate about creating clean code with elegant designs to enhance the user experience.< br /> Working with React.js, node.js, SQL, Postgres, MongoDB, and python. <br />As a musician and ex-teacher, I thrive in exploring new concepts, libraries, and languages;  allowing continuous growth and enhancing my skill set.  </p>
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
