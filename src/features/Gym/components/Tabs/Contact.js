import React from 'react';
import ContactForm from '../Form/ContactForm';
import '../static/css/tabs.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contato</h2>
      <div className="contact-info">
        <div>
          <ContactForm />
        </div>
        <div>
          <h3>Informações</h3>
          <p>Telefone: (XX) XXXX-XXXX</p>
          <p>E-mail: contato@academia.com</p>
          <p>Endereço: Rua Exemplo, 123 - Cidade</p>
          <p>Horário de Funcionamento: Segunda a Sexta, 6h - 22h</p>
        </div>
      </div>
      <div className="mt-10">
        <div className="h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.224589634198!2d-122.41941578468153!3d37.77492927975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809a49f2f0f3%3A0x165b3be4ec8e9b54!2sAcademia%20Exemplo!5e0!3m2!1spt-BR!2sbr!4v1631234567890!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
