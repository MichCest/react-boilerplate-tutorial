# Building a React Boilerplate App from scratch

**This full tutorial with commentary is available on [Medium](https://medium.com/@mcestone/building-a-react-boilerplate-app-from-scratch-f604e443fffd).**

[create-react-app](https://create-react-app.de) is a simple way to setup an entire app by running a single command. While this is a great way to create an app quickly, you are left without full understanding of your project and may have difficulty customizing your build. In this tutorial we will be building a boilerplate React project from scratch without using [create-react-app](https://create-react-app.dev/). This is great experience for any React developer to understand what is going on behind the scenes of their project.


# Stack
### [React](https://reactjs.org/)
A JavaScript library for building user interfaces based on UI components.

### [Sass](https://sass-lang.com/)
A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.

### [Babel](https://babeljs.io/)

A JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language.

### [Webpack](https://webpack.js.org/)

A module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.


# File Structure

```bash
├── dist
│   └── bundle.js
├── public
│   ├── index.html
|   └── images
├── src
│   ├── App.jsx
│   ├── App.scss
│   └── index.js
├── .babelrc
├── .gitignore
├── package.json
└── webpack.config.js
```

# Tutorial

Below we will go through step by step instructions of how to build a react boilerplate from scratch.

## Step 1 - Initial setup

Install NPM and Node if you haven't already
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Create an empty directory and name it whatever you would like. Open a terminal in that directory and run the following command to create a **package.json** file.

    npm init -y

the `-y` flag creates a new 	**package.json** with the default configurations. You can change these configurations at anytime to add more details about your project. **package.json** is where all of your dependencies, devDependencies and build scripts will live.

## Step 2 - Add static file

1. Create two directories named **public** and **src** inside the root directory.
2. Inside the **public** folder, create a file named **index.html** and paste in the below code.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content=
        "width=device-width, initial-scale=1.0">
    <title>React Boilerplate from Scratch</title>
</head>
<body>
 
    <!-- This is the div where React
        will render our app -->
    <div id="root"></div>
    <noscript>
        Please enable javascript to view this site.
    </noscript>
    <script src="../dist/bundle.js"></script>
</body>
</html>
```
 - **public** contains static assets (images) and an **index.html** file where react will render our app
 - **src** contains all of the source code

## Step 3 - Install React and [React-Dom](https://reactjs.org/docs/react-dom-client.html)

    npm i react react-dom

## Step 4 - Create app files
Now, create three files inside **src** directory named as **App.jsx**, **index.js**, **App.scss**. These files contain the actual code.

**App.jsx**
```javascript
import React from "react";
import "./App.scss";
const App = () => {
  const title = 'React Boilerplate from Scratch';
  const desc = 'A tutorial to create a boilerplate app utilizing react, sass, babel and webpack.';
  return (
    <div>
      <h1 className="heading">{title}</h1>
      <h4 className="sub-heading">{desc}</h4>
    </div>
  );
};
 
export default App;
```

**index.js**
```javascript
import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
```

**App.scss**
```scss
$body-color: white;

body {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  color: $body-color;
  background-color: black;
}
h1 {
  font-size: 4rem;
  font-weight: 400;
}
h4 {
  font-size: 1.5rem;
  font-weight: 100;
  margin-bottom: 60px;
  color: #a3a3a3;
}
```

## Step 5 - Add images
Create an **images** folder inside **public** and paste the images from within the images folder in this repository. Add the images to **App.jsx** and update the styles.

```bash
├── public
│   └── images
│       ├── babel.svg
│       ├── react.svg
|       ├── sass.svg
|       └── webpack.svg
```

**App.jsx**
```javascript
import React from "react";
import "./App.scss";
import ReactLogo from "../public/images/react.svg";
import SassLogo from "../public/images/sass.svg";
import BabelLogo from "../public/images/babel.svg";
import WebpackLogo from "../public/images/webpack.svg";

const App = () => {
  const title = 'React Boilerplate from Scratch';
  const desc = 'A tutorial to create a boilerplate app utilizing react, sass, babel and webpack.';
  return (
    <div>
      <h1 className="heading">{title}</h1>
      <p className="sub-heading">{desc}</p>
      <div className="logo-container">
        <img src={ReactLogo} alt="React Logo" />
        <img src={SassLogo} alt="Sass Logo" />
        <img src={BabelLogo} alt="Babel Logo" />
        <img src={WebpackLogo} alt="Webpack Logo" />
      </div>
    </div>
  );
};
 
export default App;
```

**App.scss**
```scss
$body-color: white;
$width: 800px;
$margin: 60px;

body {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  color: $body-color;
  background-color: black;
}
h1 {
  font-size: 4rem;
  font-weight: 400;
}
p {
  font-size: 1.5rem;
  font-weight: 100;
  margin-bottom: $margin;
  color: #a3a3a3;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: $width;
  margin: auto;
  background-color: #262626;
  padding: 20px;
  img {
    margin-right: 10px;
    width: 150px;
    cursor: pointer;
  }
}
```

## Step 6 - Install Babel

In React, we write our components using JSX which allows us to write HTML in React. JSX can not be implemented directly by browsers, but instead requires a compiler to transform it into ECMAScript. This is where Babel comes in. When we install babel it will perform the following tasks:

1.  Converts JSX (JavaScript XML) into vanilla javascript.
2.  Converts new ES6 syntaxes into browser compatible syntaxes so that old versions of browsers can also support our code.

To install babel, run:

    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react

-   **–save-dev** means save all above installed modules in devDependencies in package.json file.
-   **@babel/core** is a module that contains the main functionality of Babel.
-   **@babel/cli** is a module that allows us to use babel from the terminal.
-   **@babel/preset-env** is preset that handles the transformation of ES6 syntax into common javascript.
-   **@babel/preset-react** is preset which deals with JSX and converts it into vanilla javascript.

Now, create a file **.babelrc** in the root directory. This file will tell babel transpiler what presets and plugins to use to transpile the code. Add the following JSON code:

```json
{
    "presets": ["@babel/preset-env","@babel/preset-react"]
}
```

## Step 7 - Install Webpack
Webpack is a static module bundler that works well with Babel. Below is what it will do for us in our project.

1. Creates a local development server for our project
2. Takes code from the **src** directory and performs required operations like bundling of code, conversion of ES6 syntax and JSX syntax into common javascript etc. and hosts the **public** directory so that we can view our app in the browser.

```
npm install --save-dev webpack webpack-cli webpack-dev-server
```

-   **–save-dev** is the same as discussed above.
-   **webpack** is  a modular bundler.
-   **webpack-cli** allows us to use webpack from the terminal by running a set of commands.
-   **webpack-dev-server** provides  a development server with live reloading i.e. you do not need to refresh the page manually.

## Step 8 - Add Webpack loaders
Webpack can understand JavaScript and JSON files only. So, to use Webpack functionality in other files like .scss, babel files, etc., we have to install some loaders in the project.

```
npm i --save-dev style-loader css-loader sass sass-loader babel-loader
```

-   **sass-loader** compiles sass to css.
-   **css-loader** collects CSS from all the CSS files in the app and bundle it into one file.
-   **style-loader** puts all stylings inside <style> tag in index.html file present in the public folder.
-   **babel-loader** is a package that allows the transpiling of javascript files using babel and webpack.

## Step 9 - Configure Webpack
Create a **webpack.config.js** file in the root directory that helps us to define what exactly webpack should do with our source code. We will specify the **entry** point from where webpack should start bundling, the **output** point that is where it should output the bundles and assets, **plugins**,  etc.

**webpack.config.js**
```javascript
const path = require("path");
 
module.exports = {
 
  // Entry point that indicates where
  // webpack starts bundling
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // checks for .js or .jsx files
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      {
        test: /\.s[ac]ss$/i, // checks for .scss files
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        // files will be emitted to the output directory and their paths will be injected into the bundles
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: 'asset/resource'
      },
    ],
  },
 
  // Options for resolving module requests
 // extensions that are used
  resolve: { extensions: ["*", ".js", ".jsx"] },
 
  // Output point is where webpack should
  // output the bundles and assets
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
};
```

## Step 10 - Build and Run the project!
Add the below scripts to the **package.json** file.

```json
"scripts": {
    "start":"npx webpack-dev-server --mode development --open --hot",
    "build":"npx webpack --mode production",
  }
```
-   **–open** flag tells the `webpack-dev-server` to open the browser instantly after the server had been started.
-   **–hot** flag enables webpack’s Hot Module Replacement feature. It only updates what’s changed in the code, so it does not update the whole code, again and again, that’s why it saves precious development time.

To run the application with live reload:

    npm run start

To compile the application in production mode:

    npm run build
A **dist** folder will be created with your **bundle.js** file and static assets in it.


## Step 11 - Add interactivity to images
Add the `useState` hook available in react to change the description based on the image clicked

**App.jsx**
```javascript
import React, { useState } from "react";
import "./App.scss";
import ReactLogo from "../public/images/react.svg";
import SassLogo from "../public/images/sass.svg";
import BabelLogo from "../public/images/babel.svg";
import WebpackLogo from "../public/images/webpack.svg";

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
```

**App.scss**
```scss
$body-color: white;
$width: 800px;
$margin: 60px;

body {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  color: $body-color;
  background-color: black;
}
h1 {
  font-size: 4rem;
  font-weight: 400;
}
p {
  font-size: 1.5rem;
  font-weight: 100;
  margin-bottom: $margin;
  color: #a3a3a3;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: $width;
  margin: auto;
  background-color: #262626;
  padding: 20px;
  img {
    margin-right: 10px;
    width: 150px;
    cursor: pointer;
  }
}
.stack-detail {
  margin: auto;
  margin-top: $margin;
  width: $width;
  line-height: 2rem;
}
```
