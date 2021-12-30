import React from "react";
import alunos from "../../Data/alunos";


export default (props) => {
    const alunosLI = alunos.map((alunos) =>{
        return (
        <li key={alunos.id}>
            {alunos.id}) {alunos.nome} = {alunos.nota}
        </li>
        );
    });


    return (
        <div>
            <ul style={{listStyle: "none"}}>{alunosLI}</ul>
        </div>

    );

};