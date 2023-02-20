import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import "./Navbar.css";

function NavbarTop() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="nav-color">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="links" href="#o-mnie">
              O MNIE
            </Nav.Link>
            <Nav.Link className="links" href="#treningi">
              TRENINGI
            </Nav.Link>
            <Nav.Link className="links" href="#osiagniecia">
              OSIĄGNIĘCIA
            </Nav.Link>
            <Nav.Link className="links" href="#cennik">
              CENNIK
            </Nav.Link>
            <Nav.Link className="links" href="#zapisy">
              ZAPISY
            </Nav.Link>
            <Nav.Link className="links" href="#kontakt">
              KONTAKT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavbarTop;
