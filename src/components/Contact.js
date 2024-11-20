import React from 'react';

function Contact() {
    return (
        <div className="py-20 bg-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contato</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Nome</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">E-mail</label>
                            <input type="email" className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Telefone</label>
                            <input type="tel" className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Mensagem</label>
                            <textarea className="w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
                        </div>
                        <button className="bg-gray-500 text-black px-4 py-2 rounded-md hover:bg-gray-600">
                            Enviar
                        </button>
                    </form>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Informações</h3>
                    <p className="mb-2">Telefone: (XX) XXXX-XXXX</p>
                    <p className="mb-2">E-mail: contato@academia.com</p>
                    <p className="mb-2">Endereço: Rua Exemplo, 123 - Cidade</p>
                    <p className="mb-2">Horário de Funcionamento: Segunda a Sexta, 6h - 22h</p>
                </div>
            </div>
            <div className="mt-10">
                {/* Integrar Google Maps aqui */}
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
