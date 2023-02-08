import React, { useState } from "react";
import "./App.scss";
import ReactLogo from "./images/react.svg";
import SassLogo from "./images/sass.svg";
import BabelLogo from "./images/babel.svg";
import WebpackLogo from "./images/webpack.svg";

const App = () => {
  const [tech, setTech] = useState('')
  const title = 'React Boilerplate from Scratch';
  const desc = 'A tutorial to create a boilerplate app utilizing react, sass, babel and webpack.';
  return (
    <div>
      <h1 className="heading">{title}</h1>
      <p className="sub-heading">{desc}</p>
      <div className="logo-container">
        <img src={ReactLogo} alt="React Logo" onClick={() => setTech('react')} />
        <img src={SassLogo} alt="Sass Logo" onClick={() => setTech('sass')} />
        <img src={BabelLogo} alt="Babel Logo" onClick={() => setTech('babel')} />
        <img src={WebpackLogo} alt="Webpack Logo" onClick={() => setTech('webpack')} />
      </div>
      <StackDetail tech={tech} />
    </div>
  );
};

const StackDetail = (props) => {
  // set the stack detail based on the currently selected technology
  let detail = '';
  switch(props.tech) {
    case 'react':
      detail = 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
      break;
    case 'sass':
      detail = 'A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.'
      break;
    case 'babel':
      detail = 'A JavaScript transpiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language.'
      break;
    case 'webpack':
      detail = 'A module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.'
      break;
  }
  return (
    <p className="stack-detail">{detail}</p>
  )
}
 
export default App;