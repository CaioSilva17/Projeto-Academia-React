import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../static/css/tabs.css';

function Coaches() {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    axios.get('/api/coaches/')
      .then(response => {
        setCoaches(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar coaches:', error);
      });
  }, []);

  return (
    <div className="coaches-list">
      <h2>Treinadores</h2>
      {coaches.map((coach) => (
        <div key={coach.id} className="coach-item">
          <h3>{coach.name}</h3>
          <p>Especialização: {coach.specialization}</p>
        </div>
      ))}
    </div>
  );
}

export default Coaches;