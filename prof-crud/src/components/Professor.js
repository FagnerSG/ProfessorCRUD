import React from "react";

export default function Professor(props) {
    return (
        
        
        <form className='container border'>

            <div  className="row g-2">

                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                    
                    <div className="col xs=auto border">
                        {props.prof.id}
                    </div>

                    <div className="col xs=auto border">
                        {props.prof.nome}
                    </div>

                    <div className="col xs=auto border">
                        {props.prof.materia}
                    </div> 
                

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
            
        </form>   
            
    )
}