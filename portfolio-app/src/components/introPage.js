import React, { useEffect } from "react";
import { Container, TextArea, Sentence, Curser, TextContainer } from "../assets/styling/components/introPageStyling";


export default function IntroPage(props) {

  let loopThroughSplittedText = () => { };

  useEffect(() => {
    loopThroughSplittedText = (string, id, delay) => {

      const splittedText = string.split("");

      setTimeout(function () {
        for (let i = 0; i < splittedText.length; i++) {
          (function (i) {
            setTimeout(function () {
              let displayText = [];
              document.getElementById(`text${id}`).innerHTML += splittedText[i];
              displayText.push(splittedText[i])
              return displayText.join("");
            }, 150 * i);
          })(i);
        }
      }, delay)
    }

    loopThroughSplittedText("Hello, I'm Emma Andrews.", 1)
    loopThroughSplittedText("I'm a full-stack developer.", 2, 5000)
    loopThroughSplittedText("Click anywhere to continue...", 3, 10000)

  }, [])


  return (
    <Container id="introContainer" onClick={props.handleClick}>
      <TextContainer >
        <TextArea>
          <Sentence id="text1"></Sentence>
          <Sentence id="text2"></Sentence>
          <Sentence id="text3"></Sentence>
        </TextArea>
        <Curser />
      </TextContainer>
    </Container>
  )
}
