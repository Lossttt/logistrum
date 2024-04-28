import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button, Alert } from "react-bootstrap";
import { registerUser } from "../../../services/Api/ApiConfig";

const StyledContainer = styled.div`
  background-color: #93afa8;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledFormContainer = styled.div`
  background-color: #e5e5e5;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const StyledTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const LoginButton = styled(Button)`
  background-color: #999999;
  border: none;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const WarningAlert = styled(Alert)`
  margin-top: 1rem;
`;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordWarning, setShowPasswordWarning] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform password validation (example: password must be at least 8 characters)
    if (password.length < 8) {
      setShowPasswordWarning(true);
      return;
    }

    try {
      // Call the registerUser function to register the user
      const result = await registerUser(email, password);
      console.log("User registered successfully:", result);

      // Proceed with login logic if registration succeeds
      console.log("Login with:", email, password);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <StyledContainer>
      <StyledFormContainer>
        <StyledTitle>Sign In</StyledTitle>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {showPasswordWarning && (
              <WarningAlert variant="danger">
                Password must be at least 8 characters long.
              </WarningAlert>
            )}
          </Form.Group>

          <LoginButton variant="primary" type="submit">
            Login
          </LoginButton>
        </Form>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default LoginForm;
