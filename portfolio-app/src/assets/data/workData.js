import html from "../images/icons8-html-5-480.png";
import CSS from "../images/icons8-css3-480.png";
import JS from "../images/icons8-javascript-480.png";
import ReactIcon from "../images/icons8-react-native-480.png";
import Redux from "../images/icons8-redux-480.png";
import NodeIcon from "../images/icons8-nodejs-480.png";
import Mongo from "../images/icons8-mongodb-480.png";
import PostgreSQL from "../images/icons8-postgresql-480.png";
import eventico from "../images/eventico.png"
import Hackathon from "../images/hackathon.png"



export const projects = [
    {
        title: "Eventico",
        image: eventico,
        summary: "Very short summary, max six words.",
        tech: [JS, ReactIcon, NodeIcon, Mongo],
        writeup: "A single-page web application, which provides users with a platform to create events and invite people. Events can be private or public, and users have the ability to sign-up without having to create an account. Created using React.js, node.js, and MongoDB.",
    },
    {
        title: "Hackton",
        image: Hackathon,
        summary: "Very short summary, max six words.",
        tech: [JS, ReactIcon, Redux, NodeIcon, PostgreSQL],
        writeup: "A single-page application, using React.js and Redux-saga state management. Hackton is a platform for users to create hackathon events, sign up for events that are judged and graded by designated event judges. Utilizing normalization in the rational database in Postgres, and using node.js and express to provide the API logic.",
    },
    // {
    //     title: "Something Else",
    //     image: eventico,
    //     summary: "Very short summary, max six words.",
    //     tech: [html, CSS, JS],
    //     writeup: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //     title: "Another Project",
    //     image: eventico,
    //     summary: "Very short summary, max six words.",
    //     tech: [JS, ReactIcon, NodeIcon],
    //     writeup: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //     title: "And Another one",
    //     image: "",
    //     tech: [JS, ReactIcon, NodeIcon],
    //     summary: "Very short summary, max six words.",
    //     writeup: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
]