function HelloUser({name , color}){
    return (
        <div style={{color : color}}>
            <h4>Hello {name}</h4>
        </div>
    )
}

export default HelloUser