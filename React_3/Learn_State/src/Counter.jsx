import { useState } from "react";

function init(){
    console.log("Initilaziation done")
    return Math.floor(Math.random() * 10);
}

function Counter(){
    let [count , setCount] = useState(init)

    function increaseCount(){
        setCount(count + 1);
        console.log("Component Rendered")
    }

    return(<>
      <h3>State in react</h3>
      <h4>Count = {count}</h4>
      <button onClick={increaseCount}>increase</button>
    </>)
}

export default Counter