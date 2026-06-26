function Product({title = "Unknown" , price = 99999 , features=[]}){
    
    // const list = features.map((feature,index)=> <li key={index}> {feature} </li>)
    let styles = {backgroundColor : price >= 5000 ? "pink" : ""}

    return(
        <div style={styles}> 
        <h4>Product : {title}</h4>
        <h5>Price : {price}</h5>
        {/* <p>{list}</p> */}
        
        <p>{price >=5000 ? "5% off" : ""}</p>
        {/* <p>{price >=5000 && "5% off"}</p> */}
        </div>
    )
}

export default Product