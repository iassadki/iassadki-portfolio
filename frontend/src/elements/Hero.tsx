import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Hero: React.FC = () => {
    return (
        <HeroSection>
            <HeroTitle>Développeur Web et Logiciel Parisien et Passioné</HeroTitle>
            <HeroSubtitle>Je suis Ilias Assadki, le développeur qu'il vous faut</HeroSubtitle>
            <Button label="Contactez-moi" />
        </HeroSection>
    );
};

const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 100px;
`;


const HeroTitle = styled.h1`
    font-size: 3rem;
    color: var(--primary-color);;
    font-family: var(--primary-font);
`;

const HeroSubtitle = styled.h2`
    font-size: 1.5rem;
    color: var(--grey-color);
`;

export default Hero;