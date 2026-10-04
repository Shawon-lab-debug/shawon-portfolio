
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
  {
    label: 'GitHub',
    href: 'https://github.com/Shawon-lab-debug',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/roknuzzaman-shawon-884454400/',
    icon: 'linkedin',
  },
  {
    label: 'X',
    href: 'https://x.com/Roknuzzama24402',
    icon: 'x',
  },
  {
    label: 'Email',
    href: 'roknuzzamanshawon2022@gmail.com',
    icon: 'email',
  },
];

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.28-2.6 5.22-5.08 5.5.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      );

    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9h2.97v9.45ZM6.45 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.74h-2.97v-4.6c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.2-1.76 2.43v4.68H9.22V9h2.85v1.29h.04c.4-.75 1.37-1.53 2.82-1.53 3.01 0 3.57 1.98 3.57 4.55v5.14Z" />
        </svg>
      );

    case 'x':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.44L5.54 22H2.4l7.25-8.29L1.8 2h6.4l4.43 6.9L18.9 2Zm-1.1 17.86h1.73L7.27 4.03H5.42L17.8 19.86Z" />
        </svg>
      );

    case 'email':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    default:
      return null;
  }
}

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

              <ul className="footer-social-list">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    {link.href.trim() !== '' ? (
                      <a
                        className="footer-social-link"
                        href={
                          link.icon === 'email'
                            ? `mailto:${link.href}`
                            : link.href
                        }
                        target={link.icon === 'email' ? undefined : '_blank'}
                        rel={link.icon === 'email' ? undefined : 'noreferrer'}
                        aria-label={link.label}
                        title={link.label}
                      >
                        <span
                          className={`footer-social-icon footer-social-icon-${link.icon}`}
                        >
                          <SocialIcon name={link.icon} />
                        </span>

                        <span className="footer-social-label">
                          {link.label}
                        </span>

                        {link.icon !== 'email' && (
                          <span
                            className="footer-external"
                            aria-hidden="true"
                          >
                            ↗
                          </span>
                        )}
                      </a>
                    ) : (
                      <span
                        className="footer-social-link footer-social-link-disabled"
                        title={`${link.label} link not added yet`}
                      >
                        <span
                          className={`footer-social-icon footer-social-icon-${link.icon}`}
                        >
                          <SocialIcon name={link.icon} />
                        </span>

                        <span className="footer-social-label">
                          {link.label}
                        </span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
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
