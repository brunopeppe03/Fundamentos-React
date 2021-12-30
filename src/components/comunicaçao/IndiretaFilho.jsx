import React from "react";

export default props => {
    const cb = props.quandoClicar
    const gerarIdade = () => parseInt( Math.random() * (20)) + 50
    const gerarNerd = () =>  Math.random() > 0.5
    console.log(gerarIdade(),gerarNerd());
    return (
        <div>
            <div>Filho</div>
            <button onClick={function(e){cb('Joao',gerarIdade(),gerarNerd())}}>Fornecer Informaçoes </button>
        </div>
    )

}