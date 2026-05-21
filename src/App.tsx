import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PythonCourse from './pages/PythonCourse';
import Chapter1 from './pages/Chapter1';
import Chapter2 from './pages/Chapter2';
import Chapter3 from './pages/Chapter3';
import Chapter4 from './pages/Chapter4';
import Chapter5 from './pages/Chapter5';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/python-course" element={<PythonCourse />} />
          <Route path="/python-course/chapter-1" element={<Chapter1 />} />
          <Route path="/python-course/chapter-2" element={<Chapter2 />} />
          <Route path="/python-course/chapter-3" element={<Chapter3 />} />
          <Route path="/python-course/chapter-4" element={<Chapter4 />} />
          <Route path="/python-course/chapter-5" element={<Chapter5 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
