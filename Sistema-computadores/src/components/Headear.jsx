import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import "./header.css";

function Header({ hideLogin, children }) {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">PU Suporte e Manutenção</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ms-auto mb-2 mb-lg-0">
              {!hideLogin && (
                <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
              )}
              <Nav.Link as={Link} to="/checkout">CHECKOUT</Nav.Link>
            </Nav>
            <Form className="d-flex ms-3" role="search">
              <FormControl
                type="search"
                placeholder="pesquisar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary" type="submit" className="me-2">
                pesquisar
              </Button>
            </Form>
            {/* Adicione esta linha para renderizar os filhos */}
            {children}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;