import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Hero: React.FC = () => {
    return (
        <HeroSection>
            <HeroTitle>Développeur Parisien Passioné</HeroTitle>
            <HeroSubtitle>Web et Logiciel, Spécialité Frontend</HeroSubtitle>
            <Button>En savoir plus</Button>
        </HeroSection>
    );
};

const HeroSection = styled.section`
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const HeroTitle = styled.h1`
    font-size: 3rem;
    color: #333;
`;

const HeroSubtitle = styled.h2`
    font-size: 1.5rem;
    color: #666;
`;

export default Hero;