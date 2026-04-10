import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const HomeLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-50">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="bg-pink-100 py-6 text-center text-pink-800">
        <p>© 2026 个人主页 | 商务数据分析与应用专业</p>
      </footer>
    </div>
  );
};

export default HomeLayout;