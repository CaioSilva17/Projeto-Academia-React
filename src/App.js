import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './features/Gym/components/Partials/Navbar';
import Footer from './features/Gym/components/Partials/Footer';
import Home from './features/Gym/components/Tabs/Home';
import Classes from './features/Gym/components/Tabs/Classes';
import Coaches from './features/Gym/components/Tabs/Coaches';
import Contact from './features/Gym/components/Tabs/Contact';
import Students from './features/Gym/components/Tabs/Students';
import About from './features/Gym/components/Tabs/About';

function App() {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/coaches" element={<Coaches />} />
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
