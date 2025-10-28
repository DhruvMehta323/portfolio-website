import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Define navigation items in one place
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Resume', path: '/resume' },
    { label: 'Skills & Experience', path: '/skillnexp' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Memoize base styles to prevent re-creation on every render
  const linkBaseStyle = useMemo(() => ({
    color: '#2563eb',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'normal',
    paddingBottom: '4px',
    borderBottom: '2px solid transparent',
    transition: 'all 0.3s ease',
  }), []);

  const getLinkStyle = (path) => ({
    ...linkBaseStyle,
    fontWeight: isActive(path) ? 'bold' : 'normal',
    borderBottom: isActive(path) ? '2px solid #2563eb' : '2px solid transparent',
  });

  const handleMouseEnter = (e) => {
    const target = e.currentTarget;
    target.style.borderBottom = '2px solid #2563eb';
    target.style.fontWeight = 'bold';
  };

  const handleMouseLeave = (e, path) => {
    const target = e.currentTarget;
    target.style.borderBottom = isActive(path) ? '2px solid #2563eb' : '2px solid transparent';
    target.style.fontWeight = isActive(path) ? 'bold' : 'normal';
  };

  return (
    <nav
      style={{
        background: 'linear-gradient(135deg, #e8f0fe 0%, #f0f4f8 100%)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              color: '#0591d8',
              fontSize: '28px',
              fontWeight: 'bold',
              textDecoration: 'none',
              letterSpacing: '-0.5px',
            }}
            aria-label="Dhruv Mehta - Home"
          >
            Dhruv Mehta
          </Link>

          {/* Navigation Links */}
          <div style={{ display: 'flex', gap: '2rem' }}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={getLinkStyle(item.path)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={(e) => handleMouseLeave(e, item.path)}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;