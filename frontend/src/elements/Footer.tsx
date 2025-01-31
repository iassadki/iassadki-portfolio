import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <nav>
                    <ul style={navListStyle}>
                        <li style={navItemStyle}><a href="#home">Home</a></li>
                        <li style={navItemStyle}><a href="#about">About</a></li>
                        <li style={navItemStyle}><a href="#projects">Projects</a></li>
                        <li style={navItemStyle}><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

const footerStyle: React.CSSProperties = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem 0',
    textAlign: 'center',
};

const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
};

const navListStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    margin: '1rem 0 0',
};

const navItemStyle: React.CSSProperties = {
    margin: '0 1rem',
};

export default Footer;