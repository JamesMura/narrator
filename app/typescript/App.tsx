import React from "react";
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap";
import { Routes, Route, NavLink } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import AuthorDetails from "./pages/AuthorDetails";
import Authors from "./pages/Authors";
import BookDetails from "./pages/BookDetails";
import Books from "./pages/Books";
import NarratorDetails from "./pages/NarratorDetails";
import Narrators from "./pages/Narrators";
function App() {
  return (
    <section>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            AudioBooker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/app/books">
                AudioBooks
              </Nav.Link>
              <Nav.Link as={NavLink} to="/app/authors">
                Authors
              </Nav.Link>
              <Nav.Link as={NavLink} to="/app/narrators">
                Narrators
              </Nav.Link>
            </Nav>
            <SearchBar />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/app/books" element={<Books />} />
          <Route path="/app/books/:id" element={<BookDetails />} />
          <Route path="/app/narrators" element={<Narrators />} />
          <Route path="/app/narrators/:id" element={<NarratorDetails />} />
          <Route path="/app/authors" element={<Authors />} />
          <Route path="/app/authors/:id" element={<AuthorDetails />} />
        </Routes>
      </Container>
    </section>
  );
}

export default App;
