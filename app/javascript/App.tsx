import React from 'react';
import { Container, Row, Col, Button, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import SearchBar from './components/SearchBar';
import Authors from './pages/Authors';
import Books from './pages/Books';
import Narrators from './pages/Narrators';
function App() {
    return (
        <section>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">AudioBooker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/app/books">AudioBooks</Nav.Link>
                            <Nav.Link href="/app/authors">Authors</Nav.Link>
                            <Nav.Link href="/app/narrators">Narrators</Nav.Link>
                        </Nav>
                        <SearchBar />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Routes>
                    <Route path="/" element={<Books />} />
                    <Route path="/app/books" element={<Books />} />
                    <Route path="/app/narrators" element={<Narrators />} />
                    <Route path="/app/authors" element={<Authors />} />
                </Routes>
            </Container>
        </section>

    );
}

export default App;