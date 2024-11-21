import React, { useState } from 'react';
import { sendContactForm } from '../../../../services/api';
import '../static/css/forms.css'; // Importando o arquivo CSS

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { name, email, phone, message };

        try {
            const response = await sendContactForm(formData);
            console.log('Formulário enviado com sucesso:', response);
            setSuccess(true);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            setError('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form-container">
            <div className="mb-4">
                <label htmlFor="contactName">Nome</label>
                <input
                    type="text"
                    id="contactName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="contactEmail">E-mail</label>
                <input
                    type="email"
                    id="contactEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="contactPhone">Telefone</label>
                <input
                    type="tel"
                    id="contactPhone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="contactMessage">Mensagem</label>
                <textarea
                    id="contactMessage"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    required
                ></textarea>
            </div>

            {error && <p className="error">{error}</p>}
            {success && <p className="success">Mensagem enviada com sucesso!</p>}

            <button type="submit">Enviar</button>
        </form>
    );
}

export default ContactForm;
