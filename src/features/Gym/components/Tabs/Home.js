import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className="relative py-20 bg-gray-100 text-center">
            <div className="mb-8 relative">
                <img 
                    src="https://www.embraplan.com.br/imagens/noticias/11b986fc-d5a6-49a8-ba84-7cbbe8b6f93e.jpg" // Substitua pelo link da sua imagem
                    alt="Banner da Academia"
                    className="w-full h-96 object-cover opacity-30" // Ajuste a altura e a opacidade
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
                    <h1 className="text-5xl font-bold">Bem-vindo à Nossa Academia!</h1>
                    <p className="mt-2 text-lg">Aqui você encontrará os melhores treinos e dicas de saúde para alcançar seus objetivos!</p>
                    <Link to="/about" className="mt-4 inline-block bg-gray-500 px-6 py-2 rounded-md hover:bg-gray-600">
                        Saiba Mais
                    </Link>
                </div>
            </div>

            <div className="py-20 bg-white">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Dicas de Saúde</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 border border-gray-300 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Mantenha-se Hidratado</h3>
                        <p className="text-gray-600">
                            Beber água regularmente é fundamental para manter a saúde e o desempenho físico.
                        </p>
                    </div>
                    <div className="p-6 border border-gray-300 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Alimente-se Bem</h3>
                        <p className="text-gray-600">
                            Uma dieta equilibrada, rica em frutas e vegetais, é essencial para um bom funcionamento do corpo.
                        </p>
                    </div>
                    <div className="p-6 border border-gray-300 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Exercite-se Regularmente</h3>
                        <p className="text-gray-600">
                            Realizar atividades físicas de forma regular melhora a saúde cardiovascular e aumenta a energia.
                        </p>
                    </div>
                </div>
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-center mb-4">Confira Nosso Vídeo</h2>
                <div className="flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-MyTwgT95NU?si=CHx3VL1tkGK1hy0q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Home;
