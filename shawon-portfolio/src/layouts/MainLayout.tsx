import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout';
import './MainLayout.css';

function MainLayout() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Roknuzzaman Shawon. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default MainLayout;