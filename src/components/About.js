import React from "react";
import { Message } from "semantic-ui-react";


const list = [
    'This is a react app that is part of my LMS output',
    'The application has not been created using the npx create-react-app command',
    'For the application we had to setup Wepback and Babel',
    'Webpack is for bundling',
    'Babel is for transpiling'
  ]

const About = () => <Message header='This is all about this application' list={list} />

export default About;