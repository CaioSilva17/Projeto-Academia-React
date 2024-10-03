import React, { useState } from 'react';

function UserForm({ addUser }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      addUser({ name, age });
      setName('');
      setAge('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <label htmlFor="userName">Nome:</label>
        <input
          type="text"
          id="userName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="userAge">Idade:</label>
        <input
          type="number"
          id="userAge"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="toggle-button">Adicionar Usuário</button>
    </form>
  );
}

export default UserForm;
