import React from 'react';

const classesData = [
    { name: 'Yoga', image: 'https://via.placeholder.com/300x200' },
    { name: 'Pilates', image: 'https://via.placeholder.com/300x200' },
    { name: 'Treinamento Funcional', image: 'https://via.placeholder.com/300x200' },
    { name: 'Musculação', image: 'https://via.placeholder.com/300x200' },
    { name: 'Zumba', image: 'https://via.placeholder.com/300x200' },
];

function Classes() {
    return (
        <div className="py-20 bg-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nossas Aulas</h2>
            <div className="max-w-6xl mx-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-3 px-6 border border-gray-300 text-left">Nome da Aula</th>
                            <th className="py-3 px-6 border border-gray-300 text-left">Imagem</th>
                            <th className="py-3 px-6 border border-gray-300 text-left">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classesData.map((classItem, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="py-4 px-6 border border-gray-300">{classItem.name}</td>
                                <td className="py-4 px-6 border border-gray-300">
                                    <img src={classItem.image} alt={classItem.name} className="w-32 h-20 object-cover" />
                                </td>
                                <td className="py-4 px-6 border border-gray-300">
                                    <button className="bg-gray-500 text-black px-4 py-2 rounded-md hover:bg-gray-600">
                                        Saiba Mais
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Classes;
