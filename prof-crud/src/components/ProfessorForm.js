import React, { useState, useEffect } from "react";


const professorInicial = {
    id: '',
    nome:'',
    materia:'',
};

export default function ProfessorForm(props) {
    const[professor, setProfessor] = useState(professorAtual());

    useEffect(() => {
        if (props.profSelecionado.id !== 0) setProfessor(props.profSelecionado);
    }, [props.profSelecionado]);
    
    const inputTextHandler = (e) => {
        const {name, value} = e.target;
        
        setProfessor({ ...professor, [name]: value})
    };

    const handleCancelar = (e) => {
        e.preventDefault();

        props.cancelarProfessor();
        
        setProfessor(professorInicial);
    };

    const handleSubmit =(e) => {
        e.preventDefault();

        if(props.profSelecionado.id !== 0)
            props.atualizarProfessor(professor)
        else{
            props.addProfessor(professor);
        }
        setProfessor(professorInicial);
    }

    function professorAtual() {
        if (props.profSelecionado.id !== 0) {
            return props.profSelecionado;
        }
        else {
             return professorInicial;
        }
    };

    return(
        <form className='rowg-3' onSubmit={handleSubmit}>
            <div className="row g-2 border">
                    <div className='d-flex.justify-content-between '>
                            <h5 className='card-title shadow-sm '>
                                CADASTRO DE PROFESSORES
                            </h5>
                    </div>

                    <div className="col xs=auto ">           
                        <input 
                              name="idProf"
                              id='idProf' 
                              onChange={inputTextHandler}
                              type="text" 
                              class="form-control"
                              value={professor.id}
                              placeholder="ID" aria-label="id"/>
                    </div>

                    <div className="col xs=auto ">          
                        <input
                              name="nomeProf" 
                              id='nomeProf'
                              onChange={inputTextHandler}
                              type="text" 
                              className="form-control" 
                              value={professor.nomeProf}
                              placeholder="Professor" aria-label="Professor" />
                    </div>

                    <div className="col xs=auto ">           
                        <input
                              name="nomeMateria" 
                              id='nomeMateria'
                              onChange={inputTextHandler} 
                              type="text" 
                              className="form-control" 
                              value={professor.nomeMateria}
                              placeholder="Materia" aria-label="Materia" />
                    </div>

                    <div className='col xs=auto'>           
                        <button 
                            type='submit'
                            className="btn btn-outline-secondary me-2 btn-sm" 
                            onClick={props.addProfessor}>
                            Adicionar
                        </button>

                        <button 
                            type='submit'
                            className="btn btn-outline-success me-2 btn-sm"
                            onClick={props.addProfessor}>
                            Salvar
                        </button>

                        <button 
                            type='submit'
                            className="btn btn-outline-warning me-2 btn-sm" 
                            onClick={handleCancelar}>
                            Cancelar
                        </button>
                    </div>
                <hr />                
            </div>
        </form>
    )
}