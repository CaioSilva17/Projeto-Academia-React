import React from 'react';

const trainersData = [
    { name: 'João Silva', specialization: 'Personal Trainer', image: 'https://via.placeholder.com/150' },
    { name: 'Maria Oliveira', specialization: 'Instrutora de Yoga', image: 'https://via.placeholder.com/150' },
    { name: 'Carlos Pereira', specialization: 'Treinamento Funcional', image: 'https://via.placeholder.com/150' },
    { name: 'Fernanda Santos', specialization: 'Nutricionista', image: 'https://via.placeholder.com/150' },
    { name: 'Ricardo Almeida', specialization: 'Treinamento de Força', image: 'https://via.placeholder.com/150' },
    { name: 'Ana Costa', specialization: 'Dança', image: 'https://via.placeholder.com/150' },
];

function Trainers() {
    return (
        <div className="py-20 bg-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nossos Treinadores</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {trainersData.map((trainer, index) => (
                    <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md p-4 text-center">
                        <img 
                            src={trainer.image} 
                            alt={trainer.name} 
                            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
                        />
                        <h3 className="text-xl font-semibold">{trainer.name}</h3>
                        <p className="text-gray-600">{trainer.specialization}</p> {/* Exibindo a especialização */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Trainers;
