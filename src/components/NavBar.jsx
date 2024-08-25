import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => (
<>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Parfum!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/categoryId/capilares">Capilares</Nav.Link>
            <Nav.Link as={NavLink} to="/categoryId/perfumes">Perfumes</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
        
      </Navbar>

    
</>
);
