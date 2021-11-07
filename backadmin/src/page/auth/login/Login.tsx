import React from "react";
import ButtonInput from "../../../component/button/Button";
import FormInput from "../../../component/input/Input";
import "../../auth.scss"

const FORMMODEL = [
    {
        name: "email",
        type: "email",
        placeholder: "tapez votre email"
    },
    {
        name: "mot de passe",
        type: "password",
        placeholder: "tappez votre mot de passe"
    },
    {
        name: "description",
        type: "text",
        placeholder: "tappez description",
        isTextarea: true
    }
]


const Login = () => {
    return (
        <div className="auth">
            <div className="title-auth">
            <h1>Login</h1>
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


export default Login;