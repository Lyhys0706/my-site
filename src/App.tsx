import React from 'react';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import PythonCoursePage from './pages/PythonCoursePage';

function App() {
  return (
    <div className="min-h-screen bg-pink-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/python-course" element={<PythonCoursePage />} />
        </Routes>
      </main>
      <footer className="bg-pink-100 py-6 text-center text-pink-800">
        <p>© 2026 个人主页 | 商务数据分析与应用专业</p>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <About />
      <Hobbies />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;