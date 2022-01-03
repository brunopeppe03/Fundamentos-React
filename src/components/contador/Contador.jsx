import "./Contador.css";
import React, { Conponent } from "react";

import Display from "./Display";
import Botoes from "./Botoes";

import PassoFrom from "./PassoFrom"; 

 class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.numeroInicial || 5,
    };

    

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero -  this.state.passo,
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })

    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PassoFrom passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes setInc={this.inc} setDec={this.dec}/>
            </div>
        )

    }

}

export default Contador