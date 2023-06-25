import React from "react";
import Professor from './Professor';

export default function ProfessorList(props) {
    return(
      <div className="mt-3 border">
        {props.professores.map((prof) => (
            <Professor 
              key={prof.id}
              prof={prof} 
              deletarProfessor={props.deletarProfessor}
              editarProfessor={props.editarProfessor}
            />
          ))} 
      </div>
    )
    
}