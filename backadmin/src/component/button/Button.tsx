import React from "react";
import "./Button.scss"
 
interface item {
    value: string;

}


const ButtonInput = (props :item) => {
    return (
        <>
             <button className="btn-primary">{props.value}</button>   
      </>
    )
}


export default ButtonInput;