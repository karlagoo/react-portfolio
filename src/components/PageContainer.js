import React, { useState } from 'react';
import Navbar from './Navbar';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Contact') {
            return <Contact />
        };

        const handlePageChange = (page) => setCurrentPage(page);
        return (
            <div>
                <Navbar currentPage = {currentPage} handlePageChange = {handlePageChange} />
                {renderPage()}
            </div>
        )
    }
}