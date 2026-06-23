# Introduction to React
React is a popular open-source JavaScript library used for building user interfaces (UIs), especially for single-page web applications. It was developed by Meta Platforms and is widely used for creating fast, interactive, and scalable web applications.

 
# JSX (JavaScript XML)
JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows developers to write HTML-like code inside JavaScript, making UI code easier to read and write.


# React Components
A Component is the basic building block of a React application. Components allow you to split the user interface into independent, reusable pieces.

Think of a website as being made up of different parts:

Header
Navigation Bar
Main Content
Footer

Each part can be created as a separate React component.

A React Component is a reusable piece of UI that returns JSX. Components help divide an application into smaller parts, making code cleaner, easier to maintain, and reusable. Modern React applications mainly use Functional Components along with Hooks such as useState and useEffect


# Import and Export in React
Import and Export are JavaScript features used to share code between different files. In React, they are commonly used to import and export components, functions, variables, and other modules.

import:
In React (and JavaScript), import means bringing code from another file into the current file so you can use it.
import Student from "./Student";

export:
export means making a variable, function, class, or component available for use in other files.


# The Rules of JSX 
1. Return a single root element 
2. Close all the tags 
3. camelCase all most of the things! 


# React Fragment <></>
A React Fragment is a special component that allows you to group multiple elements together without adding an extra HTML element to the DOM.

Normally, a React component must return one parent element. Fragments help when you don't want an unnecessary <div>.


# JSX with Curly Braces {}
In React, curly braces {} are used inside JSX to write JavaScript expressions.

They allow you to display variables, perform calculations, call functions, and use JavaScript code directly inside JSX.

Syntax
{ JavaScript Expression }

function App() {
  const name = "Suhaib";

  return <h1>Hello, {name}</h1>;
}

# Styling Components in React

Styling Components means applying CSS styles to React components to control their appearance such as color, font size, margin, padding, and layout.

import "./App.css";