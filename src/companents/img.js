import React from "react";

const Image = (props) => {

    document.body.style = 'background-image: url(' + props.src + ')'

    return (
        <img src = {props.src} />
    )
}

export default Image;