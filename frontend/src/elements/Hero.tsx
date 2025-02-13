import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Hero: React.FC = () => {
    return (
        <HeroSection>
            <HeroTitle>Développeur Web et Logiciel</HeroTitle>
            <HeroTitle>Parisien et Passioné</HeroTitle>
            <HeroSubtitle>Développeur Web & Logiciel passionné créant des solutions digitales performantes et intuitives</HeroSubtitle>
            <HeroSubtitle>alliant expertise technique et créativité." 🚀</HeroSubtitle>
            <ButtonContainer>
                <Button label="Voir mes projets" />
                <Button label="Me contacter" />
            </ButtonContainer>
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
    font-size: 15px;
    color: var(--grey-color);
    font-weight: 100;
    margin-top: 5px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`;

export default Hero;