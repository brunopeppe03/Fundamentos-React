import React, { useDebugValue } from "react";
import _if, { Else } from "./if";

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
           <if test={usuario && usuario.nome}>
           Seja bem vindo <strong>{ usuario.nome }</strong>
           </if>
                <Else>
                   Seja bem vindo <strong>Amigao</strong>
                </Else>
        </div>
    );
};