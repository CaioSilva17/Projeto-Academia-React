import React, { useState } from "react";

const UserList = ({ users, exercises }) => {
  // Estado para armazenar quais usuários têm a lista de exercícios visível
  const [visibleExercises, setVisibleExercises] = useState({});

  // Função para alternar a visibilidade da lista de exercícios
  const toggleExercises = (userName) => {
    setVisibleExercises((prevState) => ({
      ...prevState,
      [userName]: !prevState[userName],
    }));
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      {users.length === 0 && <p>Nenhum usuário cadastrado.</p>}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <div className="user-item">
              <strong>{user.name}</strong>
              <button
                className="toggle-exercise-button"
                onClick={() => toggleExercises(user.name)}
              >
                {visibleExercises[user.name] ? "Fechar" : "Abrir mais"}
              </button>
            </div>
            {/* Exibe ou esconde a lista de exercícios */}
            {visibleExercises[user.name] && (
              <ul className="exercise-list">
                {exercises
                  .filter((exercise) => exercise.user === user.name)
                  .map((exercise, idx) => (
                    <li key={idx}>{exercise.exerciseName}</li>
                  ))}
                {exercises.filter((exercise) => exercise.user === user.name)
                  .length === 0 && <li>Nenhum exercício aplicado.</li>}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
