import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo_notext.png";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/product">
          Ventus Robotics <img width="70rem" alt="" src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link href="/product">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <NavDropdown title="Maps" id="basic-nav-dropdown">
            <NavDropdown.Item href="/dashboard">Alpha Maps</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="/login">Admin</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
