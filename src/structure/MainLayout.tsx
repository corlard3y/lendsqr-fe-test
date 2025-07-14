import { Outlet } from 'react-router-dom';
import { Topbar } from '../components/Topbar/Topbar';
import './MainLayout.scss';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className='topbar-section'>
        <Topbar />
      </div>
      <div>
      <aside>Sidebar</aside>
      <main>
        <Outlet />
      </main>
      </div>
    </div>
  );
};

export default MainLayout;
