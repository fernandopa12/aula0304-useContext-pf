import React,{createContext} from "react";
import DadosUsuario from "../dados/DadosUsuario";

const UsuarioContext = createContext({})

export const UsuarioProvider = props=>{
    return(
        <UsuarioContext.Provider value={{
            estado:{
                DadosUsuario
            }
        }}>
         {props.children}   
        </UsuarioContext.Provider>
    )
}



export default UsuarioContext

