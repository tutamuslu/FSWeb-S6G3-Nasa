import React from "react";

const Youtube = (props) => {
    return (
        <div>    
        <iframe width="560" height="315" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

export default Youtube;