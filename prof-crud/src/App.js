import { useState } from 'react';
import './App.css';
import ProfessorForm from './components/ProfessorForm';
import ProfessorList from './components/ProfessorList';
import 'bootstrap/dist/css/bootstrap.min.css';

let initialState = [
  {
    id:0,
    nome: '',
    materia: '',
  }
];

function App() {
  const [professores, setProfessores] = useState(initialState);
  const [professorSelecionado, setProfessorSelecionado] = useState({});
  
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
    setProfessorSelecionado([...professores]);
  }

  function atualizarProfessor(professorAtualizado) {
    setProfessores(
      professores.map((item) => 
        item.id === professorAtualizado.id ? professorAtualizado : item));
    setProfessores({id:''});
  }

  function deletarProfessor(id) {
    const professorFiltrado = professores.filter(
      (professor) => professor.id !== id);
    setProfessores([ ...professorFiltrado]);
  }

  function editarProfessor(id) {
    const professor = professores.find((professor) => professor.id === id);
    if (professor) {
      setProfessorSelecionado([...professor]);
      atualizarProfessor(professor);
    }
  }

  return (
  <>
      <ProfessorForm
          addProfessor={addProfessor}
          atualizarProfessor={atualizarProfessor}
          cancelarProfessor={cancelarProfessor}
          profSelecionado={professorSelecionado}
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
