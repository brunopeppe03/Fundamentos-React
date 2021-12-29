import React from "react";

export default   (props) => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max- min));
    return (
        <div>
        <h2>Valor Aleatorio</h2>
    <p>
        <strong>Valor Minimo</strong> { min}
     </p>
    <p
        ><strong>Valor Maximo</strong> { max}
     </p>
    <p>
        <strong>Valor Escolido</strong> { aleatorio} 
    </p>

    </div>
    );
};