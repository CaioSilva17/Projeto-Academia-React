import React, { useState } from 'react';
import Modal from '../Partials/Modal';
import StudentForm from '../Form/StudentForm'; // Importa o StudentForm
import ExerciseForm from '../Form/ExerciseForm'; // Importa o ExerciseForm

function Students() {
    const [students, setStudents] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [exercises, setExercises] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStudentId, setCurrentStudentId] = useState(null);

    const handleAddStudent = (newStudent) => {
        setStudents((prevStudents) => [...prevStudents, { ...newStudent, id: Date.now() }]);
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

    const addExerciseToStudent = (exercise) => {
        setExercises((prev) => ({
            ...prev,
            [currentStudentId]: [...(prev[currentStudentId] || []), exercise],
        }));
        closeModal(); // Fecha o modal após adicionar o exercício
    };

    return (
        <section className="py-20 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Lista de Alunos</h2>

            {/* Renderizando o formulário de criação de aluno */}
            <StudentForm onAddStudent={handleAddStudent} /> 

            <button
                onClick={toggleCollapse}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mb-4"
            >
                {isCollapsed ? 'Ocultar Lista de Alunos' : 'Mostrar Lista de Alunos'}
            </button>

            {isCollapsed && (
                <div className="max-w-lg mx-auto">
                    {students.length > 0 ? (
                        <ul className="space-y-4">
                            {students.map((student) => (
                                <li key={student.id} className="bg-white p-4 rounded-lg shadow-md text-left">
                                    <h4 className="text-lg font-semibold text-gray-800">{student.name}</h4>
                                    <p className="text-gray-600">Idade: {student.age}</p>
                                    <p className="text-gray-600">Email: {student.email}</p>

                                    <div className="mt-4">
                                        <button
                                            onClick={() => openModal(student.id)}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-2"
                                        >
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

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h3 className="text-2xl font-bold mb-4">Novo Exercício</h3>
                <ExerciseForm addExercise={addExerciseToStudent} />
            </Modal>
        </section>
    );
}

export default Students;