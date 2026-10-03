import { NavLink, Outlet } from 'react-router-dom';
import './MainLayout.css';

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Contact', path: '/contact' },
];

function MainLayout() {
  return (
    <div className="app-layout">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="site-logo" aria-label="Shawon home">
            Shawon<span>.</span>
          </NavLink>

          <nav className="site-nav" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `site-nav__link${isActive ? ' is-active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

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