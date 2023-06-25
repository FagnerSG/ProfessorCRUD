import { useState } from 'react';
import './App.css';
import ProfessorForm from './components/ProfessorForm';
import ProfessorList from './components/ProfessorList';

let initialState = [
  {
    id:0,
    nome: '',
    materia: '',
  }
];

function App() {
  const [professores, setProfessores] = useState(initialState);
  const [professor, setProfessor] = useState({});
  
  function addProfessor(e) {
    e.preventDefault();

    const professor = {
      id: document.getElementById ('idProf').value,
      nome: document.getElementById ('nomeProf').value,
      materia: document.getElementById('nomeMateria').value,
    };

    setProfessores([ ...professores, { ...professor}]);
  }

  function cancelarProfessor() {
    setProfessores([...professores]);
  }

  function atualizarProfessor(professorAtualizado) {
    setProfessores(
      professores.map(item => 
        item.id === professorAtualizado.id ? professorAtualizado : item));
    setProfessor({id:0});
  }

  function deletarProfessor(id) {
    const professorFiltro = professores.filter(
      (professor) => professor.id !== id);
    setProfessores([ ...professorFiltro]);
  }

  function editarProfessor(id) {
    const professor = professores.find((professor) => professor.id === id);
    if (professor) {
      setProfessores([...professores]);
      atualizarProfessor(professor);
    }
  }

  return (
  <>
      <ProfessorForm
          addProfessor={addProfessor}
          atualizarProfessor={atualizarProfessor}
          cancelarProfessor={cancelarProfessor}
          profSelecionado={professor}
          professores={professores}
      />

      <ProfessorList
          professores={professores}
          deletarProfessor={deletarProfessor}
          editarProfessor={editarProfessor}
      />
   </>
  );
}

export default App;
