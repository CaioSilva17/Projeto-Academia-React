import React, { useState } from "react";
import UserForm from "./components/UserForm";
import ExerciseForm from "./components/ExerciseForm";
import UserList from "./components/UserList";
import './index.css';

function App() {
  const [users, setUsers] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showExerciseModal, setShowExerciseModal] = useState(false);
  const [showUserList, setShowUserList] = useState(false); 
  const [selectedUser, setSelectedUser] = useState("");
  const [message, setMessage] = useState("");

  const addUser = (user) => {
    setUsers([...users, user]);
    setShowUserModal(false); 
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
    setShowExerciseModal(false); 
    setMessage(`Exercício "${exercise.exerciseName}" adicionado para ${selectedUser}!`);
    setTimeout(() => setMessage(""), 3000);
  };

  const toggleUserModal = () => setShowUserModal(!showUserModal);
  const toggleExerciseModal = () => setShowExerciseModal(!showExerciseModal);
  const toggleUserList = () => setShowUserList(!showUserList); 

  const handleUserSelect = (event) => setSelectedUser(event.target.value);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">BodyCheck</h1>
          <div className="space-x-4">
            <button 
              onClick={toggleUserModal} 
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Adicionar Usuário
            </button>
            <button 
              onClick={toggleExerciseModal} 
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Adicionar Exercício
            </button>
            <button 
              onClick={toggleUserList} 
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              {showUserList ? "Ocultar Lista de Usuários" : "Mostrar Lista de Usuários"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mensagem de Sucesso */}
      <div className="container mx-auto my-6">
        {message && (
          <div className="bg-green-100 text-green-800 py-3 px-5 rounded-lg shadow-md text-center">
            {message}
          </div>
        )}
      </div>

      {/* Modais */}
      {showUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-2xl relative w-full max-w-lg">
            <button 
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800" 
              onClick={toggleUserModal}
            >
              &times;
            </button>
            <UserForm addUser={addUser} />
          </div>
        </div>
      )}

      {showExerciseModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-2xl relative w-full max-w-lg">
            <button 
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800" 
              onClick={toggleExerciseModal}
            >
              &times;
            </button>

            <div className="mb-6">
              <label
                htmlFor="userSelectModal"
                className="block text-gray-700 font-semibold mb-2"
              >
                Selecione o usuário para aplicar o exercício:
              </label>
              <select
                id="userSelectModal"
                onChange={handleUserSelect}
                value={selectedUser}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 ease-in-out"
              >
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

      {/* Lista de Usuários */}
      {showUserList && (
        <div className="container mx-auto mt-6">
          <UserList users={users} exercises={exercises} />
        </div>
      )}

      {/* Rodapé */}
      <footer className="mt-auto bg-white py-4 shadow-inner">
        <div className="container mx-auto text-center text-gray-600">
          © 2024 BodyCheck. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
