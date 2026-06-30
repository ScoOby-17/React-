function handleFormSubmit(event){
    event.preventDefault()
    console.log("Form was submited")
    console.log(event) // print event object
}

export default function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" />
            <button type="submit">Submit</button>
        </form>
    )
}