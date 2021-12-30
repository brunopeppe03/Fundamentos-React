import './App.css';
import React from "react";

import Card from "./components/layaut/Card";

import Contador from './components/contador/Contador';
import Imput from './components/formulario/Imput';
import DiretaPai from './components/comunicaçao/DiretaPai';
import UsuarioInfo from './components/Condicional/UsuarioInfo';
import ParOuImpar from './components/Condicional/ParOuImpar';
import TabelaProdutos from './components/repetiçao/TabelaProdutos';
import ListaAlunos from './components/repetiçao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

import IndiretaPai from './components/comunicaçao/IndiretaPai';

export default () => (
        <div className="App">
            <h1>Fundamentos React</h1>

        <div className="Cards">

        <Card titulo="#12- Contador" color="#424242">
            <Contador numeroInicial={10}></Contador>
        </Card>


        <Card titulo="#11- Componente Controlado (Input)" color="#E45F56">
            <Imput></Imput>
        </Card>


        <Card titulo="#10- Comunicaçao Indireta" color="#BBAD39">
            <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="#09- Comunicaçao Direta" color="#982395">
            <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#08- Renderizaçao Condicional" color="#982395">
            <ParOuImpar>numero={20}</ParOuImpar>
            <UsuarioInfo usuario={{ nome: "Jaiuton" }} />
        </Card>


        <Card titulo="#07- Desafio repeticao" color="#3A9AD9">
            <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#06-repeticao" color="#FF4C65">
            <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
           <Familia sobrenome="Humberto">
               <FamiliaMembro nome="Agnaldo" />
               <FamiliaMembro nome="Dorival" />
               <FamiliaMembro nome="Rodovaldo" />
           </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
           <Aleatorio min={1} max={60} /> 
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
           <Fragmento/>
        </Card>

        <Card titulo="#02 - Com Parametro" color="#E8B71A">
        <ComParametro 
             titulo="Situaçao do aluno"
             aluno="Pedro" 
             nota={ 9 }
         /> 
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#588C73">
              <Primeiro></Primeiro>
        </Card>

    </div>
        </div>

        
);