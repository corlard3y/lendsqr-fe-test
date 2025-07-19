import { useState, type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Topbar } from '../components/Topbar/Topbar';
import { Sidebar } from '../components/Sidebar/Sidebar';
import './MainLayout.scss';

const MainLayout: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="main-layout">
      <div className='topbar-section'>
        <Topbar toggleSidebar={() => setSidebarOpen(prev => !prev)} />
      </div>

      <div className='body-layout'>
      <aside className={sidebarOpen ? 'show' : ''}>
        <Sidebar />
      </aside>
      <main>
        <Outlet />
      </main>
      </div>
    </div>
  );
};

export default MainLayout;
