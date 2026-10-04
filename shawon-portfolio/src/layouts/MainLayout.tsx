
import { Link, Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout';
import './MainLayout.css';

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact', to: '/contact' },
];

const socialLinks = [
  { label: 'GitHub', href: '' },
  { label: 'LinkedIn', href: '' },
  { label: 'LeetCode', href: '' },
  { label: 'Email', href: '' },
];

function MainLayout() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="app-layout">
      <Navbar />

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <Link to="/" className="footer-logo" aria-label="Shawon's home">
                Shawon<span>.</span>
              </Link>

              <p className="footer-description">
                Full Stack Web Developer crafting thoughtful digital
                experiences through clean code and purposeful design.
              </p>
            </div>

            <div className="footer-navigation">
              <h2 className="footer-heading">Explore</h2>

              <nav aria-label="Footer navigation">
                <ul className="footer-link-list">
                  {footerLinks.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="footer-social">
              <h2 className="footer-heading">Connect</h2>

              <ul className="footer-link-list">
                {socialLinks
                  .filter((link) => link.href.trim() !== '')
                  .map((link) => (
                    <li key={link.label}>
                      {link.label === 'Email' ? (
                        <a href={`mailto:${link.href}`}>{link.label}</a>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                          <span className="footer-external" aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      )}
                    </li>
                  ))}
              </ul>

              {socialLinks.every((link) => link.href.trim() === '') && (
                <p className="footer-social-placeholder">
                  Find me across the web.
                </p>
              )}
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} Roknuzzaman Shawon. All rights reserved.
            </p>

            <button
              type="button"
              className="footer-back-to-top"
              onClick={handleBackToTop}
              aria-label="Back to top"
            >
              Back to top <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
