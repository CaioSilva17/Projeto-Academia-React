import React, { useState } from 'react';
import Modal from './Modal'; // Importe o Modal

function Students() {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({ name: '', age: '', email: '' });
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [exerciseInputs, setExerciseInputs] = useState({});
    const [exercises, setExercises] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStudentId, setCurrentStudentId] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddStudent = () => {
        setStudents([...students, { ...newStudent, id: Date.now() }]);
        setNewStudent({ name: '', age: '', email: '' });
    };

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const openModal = (studentId) => {
        setCurrentStudentId(studentId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentStudentId(null);
    };

    const handleExerciseChange = (e) => {
        const { name, value } = e.target;
        setExerciseInputs((prev) => ({
            ...prev,
            [currentStudentId]: { ...prev[currentStudentId], [name]: value },
        }));
    };

    const addExerciseToStudent = () => {
        const exercise = exerciseInputs[currentStudentId];
        setExercises((prev) => ({
            ...prev,
            [currentStudentId]: [...(prev[currentStudentId] || []), exercise],
        }));
        setExerciseInputs((prev) => ({ ...prev, [currentStudentId]: { name: '', reps: '', sets: '' } }));
        closeModal(); // Fecha o modal após adicionar o exercício
    };

    return (
        <section className="py-20 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Lista de Alunos</h2>

            {/* Formulário para adicionar novo aluno */}
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto mb-8">
                <h3 className="text-2xl font-bold mb-4">Novo Aluno</h3>
                <form>
                    <label className="block text-left text-gray-700">Nome:</label>
                    <input type="text" name="name" value={newStudent.name} onChange={handleInputChange}
                        className="w-full border border-gray-300 p-3 rounded-md mb-4" />

                    <label className="block text-left text-gray-700">Idade:</label>
                    <input type="number" name="age" value={newStudent.age} onChange={handleInputChange}
                        className="w-full border border-gray-300 p-3 rounded-md mb-4" />

                    <label className="block text-left text-gray-700">Email:</label>
                    <input type="email" name="email" value={newStudent.email} onChange={handleInputChange}
                        className="w-full border border-gray-300 p-3 rounded-md mb-4" />

                    <button type="button" onClick={handleAddStudent}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                        Salvar Aluno
                    </button>
                </form>
            </div>

            {/* Botão para exibir/ocultar lista de alunos */}
            <button onClick={toggleCollapse} 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mb-4">
                {isCollapsed ? 'Ocultar Lista de Alunos' : 'Mostrar Lista de Alunos'}
            </button>

            {/* Colapsável da lista de alunos */}
            {isCollapsed && (
                <div className="max-w-lg mx-auto">
                    {students.length > 0 ? (
                        <ul className="space-y-4">
                            {students.map((student) => (
                                <li key={student.id} className="bg-white p-4 rounded-lg shadow-md text-left">
                                    <h4 className="text-lg font-semibold text-gray-800">{student.name}</h4>
                                    <p className="text-gray-600">Idade: {student.age}</p>
                                    <p className="text-gray-600">Email: {student.email}</p>
                                    
                                    {/* Exercícios para o aluno */}
                                    <div className="mt-4">
                                        <button onClick={() => openModal(student.id)}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-2">
                                            Adicionar Exercício
                                        </button>
                                        
                                        {/* Lista de exercícios */}
                                        <h5 className="text-md font-semibold text-gray-700 mt-2">Exercícios:</h5>
                                        <ul className="list-disc pl-5">
                                            {exercises[student.id]?.map((exercise, index) => (
                                                <li key={index} className="text-gray-600">
                                                    {exercise.name} - {exercise.reps} reps x {exercise.sets} séries
                                                </li>
                                            )) || <p className="text-gray-600">Nenhum exercício cadastrado.</p>}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">Nenhum aluno cadastrado ainda.</p>
                    )}
                </div>
            )}

            {/* Modal para adicionar exercício */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h3 className="text-2xl font-bold mb-4">Novo Exercício</h3>
                <label className="block text-left text-gray-700">Nome:</label>
                <input type="text" name="name"
                    value={exerciseInputs[currentStudentId]?.name || ''}
                    onChange={handleExerciseChange}
                    className="w-full border border-gray-300 p-2 rounded-md mb-2" />

                <label className="block text-left text-gray-700">Repetições:</label>
                <input type="number" name="reps"
                    value={exerciseInputs[currentStudentId]?.reps || ''}
                    onChange={handleExerciseChange}
                    className="w-full border border-gray-300 p-2 rounded-md mb-2" />

                <label className="block text-left text-gray-700">Séries:</label>
                <input type="number" name="sets"
                    value={exerciseInputs[currentStudentId]?.sets || ''}
                    onChange={handleExerciseChange}
                    className="w-full border border-gray-300 p-2 rounded-md mb-4" />

                <button onClick={addExerciseToStudent}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                    Salvar Exercício
                </button>
            </Modal>
        </section>
    );
}

export default Students;
