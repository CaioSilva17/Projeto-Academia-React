import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-black p-4 flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">Academia</h1>
            <ul className="flex space-x-4">
                <li><Link to="/" className="text-white hover:text-blue-200">Home</Link></li>
                <li><Link to="/classes" className="text-white hover:text-blue-200">Aulas</Link></li>
                <li><Link to="/trainers" className="text-white hover:text-blue-200">Treinadores</Link></li>
                <li><Link to="/contact" className="text-white hover:text-blue-200">Contato</Link></li>
                <li><Link to="/students" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white">
                    Adicionar Aluno
                </Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
