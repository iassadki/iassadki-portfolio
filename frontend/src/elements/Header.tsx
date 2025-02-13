import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Title>Ilias ASSADKI</Title>
            <Nav>
                <NavLink href="#hero">Home</NavLink>
                <NavLink href="#method">About Me</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </Nav>
        </HeaderContainer>
    );
};

// Styles using styled-components
const HeaderContainer = styled.header`
    width: 100%;
    border-radius: 50px;
    font-weight: 600;
    padding: 10px 40px;
    background-color: #88aedb;
    color: #324159;
    border: 2px solid #324159;
    display: flex;
    justify-content: space-between;
    align-items: center;
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