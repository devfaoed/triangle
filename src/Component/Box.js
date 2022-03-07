import React from "react";
import"../App.css"

function Box(props) {
    // const [on, setOn] = React.useState(props.on)
    const style = {
        backgroundColor : props.on ? "#222222" : "transparent"
    }
    // function Changes(){
    //     setOn(prev => !prev)
    // }
return(
    <div className="box" style={style} onClick={props.toggle}> </div>
)
}

export default Box;