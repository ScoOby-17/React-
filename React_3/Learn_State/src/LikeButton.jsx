import { useState } from "react";

function LikeButton(){
    let [like , setLike] = useState(0)

    function likeAdd(){
        setLike(1);
    }
    function likeRemove(){
        setLike(0);
    }

    let likeStyle = {color : "red"}

    return(<div>
      <h1>Like</h1>
      <h1> {like === 0 ? <i className="fa-regular fa-heart" onClick={likeAdd} style={likeStyle}></i> : ""} </h1>
      <h1> {like === 1 ? <i className="fa-solid fa-heart" onClick={likeRemove} style={likeStyle}></i> : ""} </h1>
    </div>)
}

export default LikeButton