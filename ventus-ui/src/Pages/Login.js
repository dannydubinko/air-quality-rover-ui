import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "./logo.png";
import styled from "styled-components";
function Login() {
  return (
    <div>
      <Centered>
        <img width="70%" alt="" src={logo}></img>
      </Centered>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Login with the details provided with your Ventus Robotics robot.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    </div>
  );
}

export default Login;
const Centered = styled.a`
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
