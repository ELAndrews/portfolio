import React from "react";
import { Container, P, TextArea, Sentence, Curser } from "../assets/styling/components/introPageStyling";


export default function IntroPage() {

  function loopThroughSplittedText(string, id, delay) {

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
  };

  return (
    <Container>
      <TextArea>
        <Sentence id="text1">{loopThroughSplittedText(" This is a tester string. ", 1)}</Sentence>
        <Sentence id="text2">{loopThroughSplittedText(" This is the second string with a delay. ", 2, 5000)}</Sentence>
        <Curser />
      </TextArea>
    </Container>
  )
}
