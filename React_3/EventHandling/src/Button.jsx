function handleClick(){
    console.log("Hello")
}

export default function Button(){
    return(
        <>
        <button onClick={handleClick} >Click me!</button>
        </>
    )
}