import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Classes from './components/Classes';
import Trainers from './components/Trainers';
import Contact from './components/Contact';
import Students from './components/Students';
import About from './components/About';

function App() {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/trainers" element={<Trainers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
