import React, { useState } from 'react';

function StudentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    phone: '',
    address: '',
    image: null,
    exercises: [],
    coaches: [],
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? e.target.files[0] : value,
    }));
  };

  const handleMultiSelectChange = (e) => {
    const { name, selectedOptions } = e.target;
    const values = Array.from(selectedOptions).map((option) => option.value);
    setFormData((prev) => ({
      ...prev,
      [name]: values,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <div className="form-group">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Idade:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Telefone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Endereço:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Imagem:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exercises">Exercícios:</label>
        <select
          id="exercises"
          name="exercises"
          multiple
          onChange={handleMultiSelectChange}
        >
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="coaches">Treinadores:</label>
        <select
          id="coaches"
          name="coaches"
          multiple
          onChange={handleMultiSelectChange}
        >
        </select>
      </div>
      <button type="submit" className="toggle-button">Salvar Estudante</button>
    </form>
  );
}

export default StudentForm;