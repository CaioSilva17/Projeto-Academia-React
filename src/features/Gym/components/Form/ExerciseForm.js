import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../static/css/forms.css';

function ExerciseForm({ addExercise }) {
    const [formData, setFormData] = useState({
        exerciseName: '',
        exerciseImage: null,
        exerciseDescription: '',
        exerciseRepetitions: '',
        exerciseSessions: '',
        selectedClass: '',
        selectedCoach: ''
    });

    const [classes, setClasses] = useState([]);
    const [coaches, setCoaches] = useState([]);

    useEffect(() => {
        // Carregar as classes ao montar o componente
        axios.get('/classes/')
            .then(response => {
                setClasses(response.data);
            })
            .catch(error => {
                console.error('Erro ao carregar classes:', error);
            });
    }, []);

    useEffect(() => {
        // Carregar os coaches quando uma classe for selecionada
        if (formData.selectedClass) {
            axios.get(`/api/coaches/?class_id=${formData.selectedClass}`)
                .then(response => {
                    setCoaches(response.data);
                })
                .catch(error => {
                    console.error('Erro ao carregar coaches:', error);
                });
        } else {
            setCoaches([]); // Limpar os coaches caso nenhuma classe seja selecionada
        }
    }, [formData.selectedClass]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addExercise(formData);
        setFormData({
            exerciseName: '',
            exerciseImage: null,
            exerciseDescription: '',
            exerciseRepetitions: '',
            exerciseSessions: '',
            selectedClass: '',
            selectedCoach: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="exercise-form">
            <div className="form-group">
                <label htmlFor="exerciseName">Nome do Exercício:</label>
                <input
                    type="text"
                    id="exerciseName"
                    name="exerciseName"
                    value={formData.exerciseName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group select-group">
                <label htmlFor="selectedClass">Classe:</label>
                <select
                    id="selectedClass"
                    name="selectedClass"
                    value={formData.selectedClass}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione uma Classe</option>
                    {classes.map((classItem) => (
                        <option key={classItem.id} value={classItem.id}>
                            {classItem.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-group select-group">
                <label htmlFor="selectedCoach">Treinador:</label>
                <select
                    id="selectedCoach"
                    name="selectedCoach"
                    value={formData.selectedCoach}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione um Treinador</option>
                    {coaches.map((coach) => (
                        <option key={coach.id} value={coach.id}>
                            {coach.name}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit">Adicionar Exercício</button>
        </form>
    );
}

export default ExerciseForm;
