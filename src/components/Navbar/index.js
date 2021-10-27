import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  const linkStyle = { border: '1px black', padding: '5px' };
  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          textDecoration: 'none',
        }}>
        <div style={linkStyle}>
          <a
            style = {{textDecoration:"none"}}
            href="#aboutme"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            About
        </a>
        </div>
        <div style={linkStyle}>
          <a
            style = {{textDecoration:"none"}}
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
        </a>
        </div>
        <div style={linkStyle}>
          <a
            style = {{textDecoration:"none"}}
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
        </a>
        </div>
        <div style={linkStyle}>
          <a
            style = {{textDecoration:"none"}}
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
        </a>
        </div>
      </section>
    </nav>
  );
}

export default NavTabs;