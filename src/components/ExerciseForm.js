import React, { useState } from 'react';

function ExerciseForm({ addExercise }) {
  const [exerciseName, setExerciseName] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (exerciseName && reps) {
      addExercise({ exerciseName, reps });
      setExerciseName('');
      setReps('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="exercise-form">
      <div className="form-group">
        <label htmlFor="exerciseName">Nome do Exercício:</label>
        <input
          type="text"
          id="exerciseName"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="exerciseReps">Repetições:</label>
        <input
          type="number"
          id="exerciseReps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="toggle-button">Adicionar Exercício</button>
    </form>
  );
}

export default ExerciseForm;
