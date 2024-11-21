import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../static/css/tabs.css';

function Classes() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get('/api/classes/')
      .then(response => {
        setClasses(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar classes:', error);
      });
  }, []);

  return (
    <div className="classes-list">
      <h2>Classes</h2>
      {classes.map((classItem) => (
        <div key={classItem.id} className="class-item">
          <h3>{classItem.name}</h3>
          <p>Treinadores: {classItem.coaches ? classItem.coaches.join(', ') : 'Nenhum'}</p>
        </div>
      ))}
    </div>
  );
}

export default Classes;
