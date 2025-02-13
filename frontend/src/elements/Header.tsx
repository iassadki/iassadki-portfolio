import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Title>Ilias Assadki</Title>
            <Nav>
                <NavLink href="#hero">Accueil</NavLink>
                <NavLink href="#method">Moi</NavLink>
                <NavLink href="#projects">Projets</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </Nav>
        </HeaderContainer>
    );
};

// Styles using styled-components

const HeaderContainer = styled.header`
    width: 100%;
    height: 80px; /* Hauteur fixe pour éviter qu'il change */
    max-width: 1200px; /* Empêche le header d'être trop large */
    margin: 0 auto; /* Centre le header */
    z-index: 1000; /* Toujours au-dessus */
    border-radius: 50px;
    background-color: #88aedb;
    border: 3px solid #324159;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    box-sizing: border-box; /* Prévient les débordements */
`;

const Title = styled.h2`
    font-weight: 700;
    color: #000;
`;

const Nav = styled.nav`
    display: flex;
    gap: 15px;
`;

const NavLink = styled.a`
    color: #000;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #555;
    }
`;

export default Header;