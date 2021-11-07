import Sider from "antd/lib/layout/Sider";
import React from "react";
import ButtonInput from "../../component/button/Button";
import FormInput from "../../component/input/Input";
import "./Page.scss";

const FORMMODEL = [
    {
        name: "Title",
        type: "text",
        placeholder: "tapez votre title"
    },
    {
        name: "description",
        type: "text",
        placeholder: "tappez description",
        isTextarea: true
    },
    {
        name: "link",
        type: "text",
        placeholder: "tappez link"
    },
]


const Page = () => {
    return (
        <div className="auth">
            <div className="title-auth">
            <h1>Page</h1>
            </div>
            <div className="formulaire">
            <form>
            {
              FORMMODEL.map((form) => {
                  return (
                      <>
                    <FormInput name={form.name} type={form.type} placeholder={form.placeholder} isTextarea={form.isTextarea}/>
                    </>
                  )
              })
                
            } 
            <ButtonInput value="Envoyer" />      
            </form>
            </div>
        </div>
    )
}


export default Page;