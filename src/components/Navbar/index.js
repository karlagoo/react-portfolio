import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Navbar(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger"><img src={require(`../../assets/images/logo.png`).default} alt="" /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        {pages.map((Page) => (
                            <li
                                className={`nav-item nav-link js-scroll-trigger ${
                                    currentPage.name === Page.name && 'active'
                                    }`}
                                key={Page.name}
                            >
                                <span
                                    onClick={() => setCurrentPage(Page)}
                                >
                                    {capitalizeFirstLetter(Page.name)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
// import logo from '../../assets/images/logo.png'

// function NavTabs({ currentPage, handlePageChange }) {
//   return (

//     <Navbar bg="light" expand="lg">
//   <Container>
//     <Navbar.Brand href="#aboutme" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'Aboutme' ? 'nav-link active' : 'nav-link'} ><img src={logo} alt={logo} /></Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="me-auto">
//         <Nav.Link href="#aboutme" onClick={() => handlePageChange('AboutMe')}
//               className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About</Nav.Link>
//         <Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')}
//               className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Nav.Link>
//         <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')}
//               className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</Nav.Link>
//         <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')}
//               className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>

//     <div>
//       <Stack direction="horizontal" gap={3}>
//         <div className="bg-light">
//           <img src={logo}/>
//         </div>

//         <div className="bg-light border ms-auto">
//           <div style={linkStyle}>
//             <a
//               style={{ textDecoration: "none" }}
//               href="#aboutme"
//               onClick={() => handlePageChange('AboutMe')}
//               className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
//             >
//               About
//         </a>
//           </div>
//         </div>

//         <div className="bg-light border">
//         <div style={linkStyle}>
//             <a
//               style={{ textDecoration: "none" }}
//               href="#portfolio"
//               onClick={() => handlePageChange('Portfolio')}
//               className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//             >
//               Portfolio
//         </a>
//           </div>
//         </div>
//         <div className="bg-light border">
//         <div style={linkStyle}>
//             <a
//               style={{ textDecoration: "none" }}
//               href="#contact"
//               onClick={() => handlePageChange('Contact')}
//               className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//             >
//               Contact
//         </a>
//           </div>
//         </div>
//         <div className="bg-light border">
//         <div style={linkStyle}>
//             <a
//               style={{ textDecoration: "none" }}
//               href="#resume"
//               onClick={() => handlePageChange('Resume')}
//               className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//             >
//               Resume
//         </a>
//           </div>
//         </div>
//       </Stack>

//     </div>
//   );
// }

// export default NavTabs;