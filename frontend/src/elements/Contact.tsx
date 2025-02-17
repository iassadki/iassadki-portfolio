import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const Contact: React.FC = () => {
    return (
        <ContactSection>
            <ContactTitle>Contact 🚀</ContactTitle>
            <ContactSubtitle>Contactez moi</ContactSubtitle>
        </ContactSection>
    );
};

const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 100px;
`;

const ContactTitle = styled.h1`
    font-size: 3rem;
    color: var(--primary-color);
    font-family: var(--primary-font);
`;

const ContactSubtitle = styled.h2`
    font-size: 15px;
    color: var(--grey-color);
    font-weight: 100;
    margin-top: -5px;
`;

export default Contact;