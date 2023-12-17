import React, { useState, useEffect } from "react";
import { BrowserRouter, Link,} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import { HashLink } from 'react-router-hash-link';

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        fixed="top"
        expand="md"
        
        style={{ backgroundColor: isScrolled ? "white" : "transparent" }}
      >
        <div className="container px-4 px-lg-5">
          <NavbarBrand>
            <Link to="/#SectionOne" style={{textDecoration:"none"}}>BIENVENUE</Link>
          </NavbarBrand>
          <NavbarToggle aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </NavbarToggle>

          <NavbarCollapse id="navbarResponsive">
            <Nav className="ms-auto">
              <Nav.Link  to="/SectionOne">Accueil</Nav.Link>
              <Nav.Link to="#sectionTwo">A propos</Nav.Link>
              <Nav.Link  to="/#projects">Conditions</Nav.Link>
              <Nav.Link  to="/#signup">Contact</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </div>
      </Navbar>
    </BrowserRouter>
  );
};

export default NavbarComponent;
