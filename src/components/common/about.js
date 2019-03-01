import React from "react";

function About() {
  return (
    <React.Fragment>
      <div class="ui raised very padded text container segment">
        <h2 class="ui header">About this application</h2>
        <div class="column">
          <p style={{fontSize:"23px"}}>This is a react application that is part my LMS output</p>
          <p style={{fontSize:"23px"}}>
            The application is not created using the create react app command{" "}
          </p>
          <p style={{fontSize:"23px"}}>The webpack was configured together with babel</p>
          <p style={{fontSize:"23px"}}>
            Webpack is for bundling:This involves bundling a piece of javascript
            code, and all its dependencies into a single javascript file that
            can be served as a static javascript and referenced from a HTML
            page.
          </p>
          <p style={{fontSize:"23px"}}>
            Babel is for transpiling:Babel is a compiler: it takes code written
            in one standard, and it transpiles it to code written into another
            standard.
          </p>
        </div>
        <p />
        <p />
      </div>
    </React.Fragment>
  );
}

export default About;
