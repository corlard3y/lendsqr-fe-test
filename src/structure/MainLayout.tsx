import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <aside>Sidebar</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
