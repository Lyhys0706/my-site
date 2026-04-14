import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import PythonCourseLayout from './layouts/PythonCourseLayout';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import PythonCoursePage from './pages/PythonCoursePage';
import PythonCoreUnit from './pages/PythonCoreUnit';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={
          <>
            <About />
            <Hobbies />
            <Skills />
            <Portfolio />
            <Contact />
          </>
        } />
      </Route>
      <Route path="/python-course" element={<PythonCourseLayout />}>
        <Route index element={<PythonCoursePage />} />
        <Route path="core-unit" element={<PythonCoreUnit />} />
      </Route>
    </Routes>
  );
}

export default App;