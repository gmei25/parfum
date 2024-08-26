import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ItemsContext } from '../contexts/ItemsContext'; 
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    const { items } = useContext(ItemsContext); 

    
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">Parfum!</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/categoryId/capilares">Capilares</Nav.Link>
                        <Nav.Link as={NavLink} to="/categoryId/perfumes">Perfumes</Nav.Link>
                    </Nav>
                    <CartWidget totalItems={totalItems} /> {/* Pasar totalItems a CartWidget */}
                </Container>
            </Navbar>
        </>
    );
};
