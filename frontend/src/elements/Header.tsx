import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={headerStyle}>
            <h2 style={titleStyle}>Ilias ASSADKI</h2>
            <nav style={navStyle}>
                <a href="#hero" style={linkStyle}>Home</a>
                <a href="#method" style={linkStyle}>About Me</a>
                <a href="#projects" style={linkStyle}>Projects</a>
                <a href="#contact" style={linkStyle}>Contact</a>
            </nav>
        </header>
    );
};

// Styles
const headerStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: '50px',
    fontWeight: 600,
    padding: '10px 40px',
    backgroundColor: '#88AEDB',
    color: '#324159',
    border: '2px solid #324159',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const titleStyle: React.CSSProperties = {
    fontWeight: 700,
    color: 'var(--black-text-color)',
};

const navStyle: React.CSSProperties = {
    display: 'flex',
    gap: '15px',
};

const linkStyle: React.CSSProperties = {
    color: 'var(--black-text-color)',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.3s ease-in-out',
};

export default Header;
