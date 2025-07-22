import { useState, type FC } from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.scss';
import { Topbar } from './Topbar/Topbar';
import { Sidebar } from './Sidebar/Sidebar';

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
