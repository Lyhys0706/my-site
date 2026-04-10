import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-pink-50">
      <Header />
      <main>
        <About />
        <Hobbies />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <footer className="bg-pink-100 py-6 text-center text-pink-800">
        <p>© 2026 个人主页 | 商务数据分析与应用专业</p>
      </footer>
    </div>
  );
}

export default App;