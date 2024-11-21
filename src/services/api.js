import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

// Função para obter as classes
export const getClasses = async () => {
    try {
        const response = await axios.get(`${API_URL}/classes/`);
        return response.data;
    } catch (error) {
        console.error('Erro ao carregar classes:', error);
        throw error;
    }
};

// Função para obter os alunos (exemplo de função existente)
export const getStudents = async () => {
    try {
        const response = await axios.get(`${API_URL}/students/`);
        return response.data;
    } catch (error) {
        console.error('Erro ao carregar classes:', error);
        throw error;
    }
};

// Função para obter os coaches, filtrando por class_id
export const getCoaches = async (classId) => {
    try {
        const response = await axios.get(`${API_URL}/coaches/?class_id=${classId}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao carregar coaches:', error);
        throw error;
    }
};

// Função para enviar o formulário de exercício
export const sendExerciseForm = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/exercises/`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao enviar formulário de exercício:', error);
        throw error;
    }
};

// Função para enviar o formulário de contato (exemplo de função existente)
export const sendContactForm = async (formData) => {
    try {
        const response = await axios.post(`${API_URL}/contacts/`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        throw error;
    }
};