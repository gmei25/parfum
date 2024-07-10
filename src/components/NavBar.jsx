import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => (
<>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Parfum!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Perfumes</Nav.Link>
            <Nav.Link href="#pricing">Cosmeticos</Nav.Link>
            <Nav.Link href="#home">Capilares</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
        
      </Navbar>

    
</>
);
