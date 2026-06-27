# Click and Non-Click Event Handling in React
Event Handling in React is the process of responding to user actions such as clicking a button, typing in an input field, hovering over an element, or submitting a form.
React uses camelCase for event names, and event handlers are passed as JavaScript functions.

1. Click Event Handling
The onClick event is triggered when the user clicks an element.

Example
function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

Output:
When the button is clicked, an alert box displays "Button Clicked!".

2. Non-Click Event Handling
React supports many events other than click events.

(a) onChange Event

Triggered when the value of an input field changes.

function App() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Enter your name"
    />
  );
}

(b) onMouseOver Event

Triggered when the mouse pointer moves over an element.

function App() {
  function handleMouseOver() {
    alert("Mouse is over the heading!");
  }

  return (
    <h1 onMouseOver={handleMouseOver}>
      Hover Over Me
    </h1>
  );
}

(c) onSubmit Event

Triggered when a form is submitted.

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Form Submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}