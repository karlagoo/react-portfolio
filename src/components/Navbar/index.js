import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';
import logo from '../../assets/images/logo.png'

function NavTabs({ currentPage, handlePageChange }) {
  const linkStyle = { border: '1px black', padding: '5px' };
  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        <div className="bg-light">
          <img src={logo}/>
        </div>
        <div className="bg-light border ms-auto">
          <div style={linkStyle}>
            <a
              style={{ textDecoration: "none" }}
              href="#aboutme"
              onClick={() => handlePageChange('AboutMe')}
              className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
            >
              About
        </a>
          </div>
        </div>

        <div className="bg-light border">
        <div style={linkStyle}>
            <a
              style={{ textDecoration: "none" }}
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
        </a>
          </div>
        </div>
        <div className="bg-light border">
        <div style={linkStyle}>
            <a
              style={{ textDecoration: "none" }}
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
        </a>
          </div>
        </div>
        <div className="bg-light border">
        <div style={linkStyle}>
            <a
              style={{ textDecoration: "none" }}
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
        </a>
          </div>
        </div>
      </Stack>

    </div>
  );
}

export default NavTabs;