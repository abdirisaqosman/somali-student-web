import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { to: '/',           label: 'Home' },
  { to: '/about',      label: 'About Us' },
  { to: '/statistics', label: 'Statistics' },
  { to: '/achievers',  label: 'High Achievers' },
  { to: '/team',       label: 'Team' },
  { to: '/gallery',    label: 'Gallery' },
  { to: '/opinions',   label: 'Opinions' },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar glass-panel">
      <div className="container nav-content">
        <div className="logo">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src="/logo.jpg" alt="ASSA Logo" className="navbar-logo" />
          </Link>
        </div>

        <ul className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={location.pathname === to ? 'active-link' : ''}
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <Link to="/join" className="btn btn-primary nav-join-btn" onClick={closeMenu}>
            Join Us
          </Link>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
