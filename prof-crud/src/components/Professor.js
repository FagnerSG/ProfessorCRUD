import React from "react";

export default function Professor(props) {
    return (
        <div  className="card-body row g-4">
                        
            <div className="col xs=auto">
                {props.prof.id}
            </div>

            <div className="col xs=auto">
                {props.prof.nome}
            </div>

            <div className="col xs=auto">
                {props.prof.materia}
            </div>

            <div className='d-flex justify-content-end pt-2 m-0 border-top'>

                <button className='btn btn-outline-primary m-2 btn-sm' 
                    onClick={() => props.editarProfessor(props.prof.id)}>
                        Editar
                </button>

                <button className='btn btn-outline-danger m-2 btn-sm' 
                    onClick={() => props.deletarProfessor(props.prof.id)}>
                        Deletar
                </button>

            </div>
        </div>
    )
}