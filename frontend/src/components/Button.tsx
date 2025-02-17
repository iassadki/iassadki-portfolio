import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
        <StyledButton>
            {label}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    padding: 15px 20px;
    border-radius: 30px;
    border: none;
    background-color: #88AEDB;
    color: #324159;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #0056b3;
    }
`;

export default Button;