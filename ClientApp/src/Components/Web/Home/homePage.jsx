import React from 'react';
import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';
import PageTransition from '../Transition/pageTransition';
import {useNavigate} from 'react-router-dom';

const HeroSection = styled.div`
  background-color: #93afa8;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const MainHeading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const SubHeading = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;

const StyledButton = styled(Button)`
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #93afa8;
  }
`;

const HomePage = () => {

  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Perform any necessary actions before navigating
    navigate('/login'); // Navigate to the next page/component
  };

  return (
      <HeroSection>
        <Container>
          <MainHeading>Welcome to Logistrum</MainHeading>
          <SubHeading>Your parcel booking solution</SubHeading>
          <StyledButton variant="light" onClick={handleGetStarted}>
            Get Started
          </StyledButton>
        </Container>
      </HeroSection>
  );
};

export default HomePage;
