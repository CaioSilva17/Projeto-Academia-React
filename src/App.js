import React, { useState } from "react";
import UserForm from "./components/UserForm";
import ExerciseForm from "./components/ExerciseForm";
import UserList from "./components/UserList";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showExerciseModal, setShowExerciseModal] = useState(false);
  const [showUserList, setShowUserList] = useState(false); // Novo estado para visibilidade da lista de usuários
  const [selectedUser, setSelectedUser] = useState("");
  const [message, setMessage] = useState("");

  const addUser = (user) => {
    setUsers([...users, user]);
    setShowUserModal(false);  // Fecha o modal após adicionar
    setMessage(`Usuário ${user.name} cadastrado com sucesso!`);
    setTimeout(() => setMessage(""), 3000);
  };

  const addExercise = (exercise) => {
    if (!selectedUser) {
      setMessage("Por favor, selecione um usuário.");
      return;
    }

    const newExercise = { ...exercise, user: selectedUser };
    setExercises([...exercises, newExercise]);
    setShowExerciseModal(false);  // Fecha o modal após adicionar
    setMessage(`Exercício "${exercise.exerciseName}" adicionado para ${selectedUser}!`);
    setTimeout(() => setMessage(""), 3000);
  };

  const toggleUserModal = () => setShowUserModal(!showUserModal);
  const toggleExerciseModal = () => setShowExerciseModal(!showExerciseModal);
  const toggleUserList = () => setShowUserList(!showUserList); // Função para alternar a visibilidade da lista de usuários

  const handleUserSelect = (event) => setSelectedUser(event.target.value);

  return (
    <div className="container">
      <h1>Academia - Cadastro de Usuários e Exercícios</h1>

      {message && <div className="message">{message}</div>}

      {/* Botões para abrir os modais */}
      <button className="toggle-button" onClick={toggleUserModal}>
        Adicionar Usuário
      </button>
      <button className="toggle-button" onClick={toggleExerciseModal}>
        Adicionar Exercício
      </button>

      {/* Botão para mostrar/ocultar lista de usuários */}
      <button className="toggle-button" onClick={toggleUserList}>
        {showUserList ? "Ocultar Lista de Usuários" : "Mostrar Lista de Usuários"}
      </button>

      {/* Modal para adicionar usuário */}
      {showUserModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleUserModal}>&times;</span>
            <UserForm addUser={addUser} />
          </div>
        </div>
      )}

      {/* Modal para adicionar exercício */}
      {showExerciseModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleExerciseModal}>&times;</span>
            
            {/* Seleção do Usuário dentro do Modal */}
            <div className="user-select-modal">
              <label htmlFor="userSelectModal">Selecione o usuário para aplicar o exercício:</label>
              <select id="userSelectModal" onChange={handleUserSelect} value={selectedUser}>
                <option value="">Selecione um usuário</option>
                {users.map((user, index) => (
                  <option key={index} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>

            <ExerciseForm addExercise={addExercise} />
          </div>
        </div>
      )}

      {/* Lista de usuários visível apenas quando showUserList é verdadeiro */}
      {showUserList && (
        <UserList users={users} exercises={exercises} />
      )}
    </div>
  );
}

export default App;
