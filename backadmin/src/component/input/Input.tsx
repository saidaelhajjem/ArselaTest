import React from "react";
import "./Input.scss";
import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

interface item {
name: string;
type:string;
placeholder:string;
isTextarea?: boolean
}


const FormInput = (props :item) => {
    return (
        <div className="blc-input">
            <label>{props.name}</label>
            {
                props.isTextarea ?
                 <TextArea rows={4}  placeholder={props.placeholder}/>         
                 :
                <Input  type={props.type} placeholder={props.placeholder}/>
            }
        </div>
    )
}


export default FormInput;

