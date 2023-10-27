import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Layout = () => {
  return (
    <><Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">How do I drive React?</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/blogs">Blogs</Nav.Link>
          <Nav.Link href="/contact">Contact me</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">User settings(dont exist)</NavDropdown.Item>
            <NavDropdown.Item href="/blogs">Blogs...again</NavDropdown.Item>
            <NavDropdown.Item href="/contact">Send me hatemail</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Definitely not a RickRoll</a>          
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      <Outlet />
    </>
  )
};

export default Layout;