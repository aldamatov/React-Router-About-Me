import React from "react";
import "../styles.css";

export default function MyChoices() {
  return (
    <div className="MyChoices">
      <h1> My choices for web development tools</h1>
      <ol>
        <li>Code Editors</li>
        <ul>
          <a href="https://atom.io/" target="_blank">
            <li>Atom</li>
          </a>
          <a href="https://code.visualstudio.com/" target="_blank">
            <li>VS Code</li>
          </a>
          <a href="https://www.sublimetext.com/" target="_blank">
            <li>Sublime</li>
          </a>
        </ul>
        <br />
        <li>Version Control Systems</li>
        <ul>
          <a href="https://git-scm.com/" target="_blank">
            <li>Git</li>
          </a>
          <a href="https://subversion.apache.org/" target="_blank">
            <li>SVN</li>
          </a>
        </ul>
        <br />
        <li>Version end asset</li>
        <ul>
          <a href="https://fonts.google.com/" target="_blank">
            <li>Google Fonts</li>
          </a>
          <a href="https://fontawesome.com/" target="_blank">
            <li>Font Awesome</li>
          </a>
        </ul>
        <br />
        <li>Front end frameworks</li>
        <ul>
          <a href="https://getbootstrap.com/" target="_blank">
            <li>Bootstrap</li>
          </a>
          <a href="https://mui.com/" target="_blank">
            <li>Material UI</li>
          </a>
        </ul>
        <br />
        <li>CSS preprocessor</li>
        <ul>
          <a href="https://sass-lang.com/" target="_blank">
            <li>SASS</li>
          </a>
          <a href="https://lesscss.org/" target="_blank">
            <li>LESS</li>
          </a>
        </ul>
        <br />
        <li>Javascript Frameworks / Libraries</li>
        <ul>
          <a href="https://reactjs.org/" target="_blank">
            <li>React</li>
          </a>
          <a href="https://angularjs.org/" target="_blank">
            <li>Angular</li>
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <li>Vue.js</li>
          </a>
          <a href="https://jquery.com/" target="_blank">
            <li>jQuery</li>
          </a>
        </ul>
        <br />
        <li>Developer Tools</li>
        <ul>
          <a href="https://developer.chrome.com/docs/devtools/" target="_blank">
            <li>Chrome Dev Tools</li>
          </a>
          <li>Firefox Web Inspector</li>
          <li>Safari Web Inspector</li>
        </ul>
        <br />
        <li>Online Coding Environments</li>
        <ul>
          <a href="https://codepen.io/" target="_blank">
            <li>Codepen</li>
          </a>
          <a href="https://replit.com/" target="_blank">
            <li>Repl</li>
          </a>
        </ul>
        <br />
        <li>Other Tools:</li>
        <ul>
          <li>Terminal</li>
          <a href="https://github.com/" target="_blank">
            <li>Github</li>
          </a>
        </ul>
      </ol>
    </div>
  );
}
