import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;


// import React from 'react';

// export default function Nav() {
//   const linkStyle = { border: '1px black', padding: '5px' };

//   return (
//     <nav className="main-header-menu">
//       <section
//         style={{
//           display: 'flex',
//           fontFamily: 'helvetica',
//           flexDirection: 'row',
//           alignItems: 'flex-start',
//           justifyContent: 'flex-end',
//         }}
//       >
//         <div style={linkStyle}>
//           <a href="#">About Me</a>
//         </div>
//         <div style={linkStyle}>
//           <a href="#">Portfolio</a>
//         </div>
//         <div style={linkStyle}>
//           <a href="#">Contact</a>
//         </div>
//         <div style={linkStyle}>
//           <a href="#">Resume</a>
//         </div>
//       </section>
//     </nav>
//   );
// }
