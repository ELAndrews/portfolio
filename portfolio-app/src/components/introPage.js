import React, { useEffect } from "react";
import { Container, P, Blink, TextArea } from "../assets/styling/components/introPageStyling";


export default function IntroPage() {
  function loopThroughSplittedText(string, delay) {

    const splittedText = string.split("");

    setTimeout(function () {
      for (let i = 0; i < splittedText.length; i++) {
        (function (i) {
          setTimeout(function () {
            let displayText = [];
            document.getElementById('text').innerHTML += splittedText[i];
            displayText.push(splittedText[i])
            return displayText.join("");
          }, 150 * i);
        })(i);
      };
    }, delay)
  };

  return (
    <Container>
      <TextArea>
        <P id="text">{loopThroughSplittedText("This is a tester string")}</P>
        <Blink />
        <P id="text">{loopThroughSplittedText("This is the second string with a delay", 8000)}</P>
        <Blink />
      </TextArea>
    </Container>
  )
}
