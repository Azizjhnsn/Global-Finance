import React from 'react';
import {BrowserRouter, Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';

import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarBrand from "react-bootstrap/NavbarBrand";


export default function NavbarComponent() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
              setIsScrolled(true);
            } else {
              setIsScrolled(false);
            }
          });   
    },);
  return (
    <BrowserRouter>
                {/* <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top " style={{ backgroundColor: isScrolled ? 'black' : 'transparent' }} id="mainNav">
            <div className="container px-4 px-lg-5">
                <HashLink className="navbar-brand" to="#SectionOne">BIENVENUE</HashLink>
                <Navbar.Toggle aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <Navbar.Brand>Menu</Navbar.Brand>
                  <i className="fas fa-bars"></i>
                </Navbar.Toggle>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><HashLink smooth className="nav-link" to="#SectionOne">Accueil</HashLink></li>
                        <li className="nav-item"><HashLink smooth className="nav-link" to="#sectionTwo">A propos</HashLink></li>
                        <li className="nav-item"><HashLink  className="nav-link" to="#projects">Conditions</HashLink></li>
                        <li className="nav-item"><HashLink className="nav-link" to="#signup">Contact</HashLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </BrowserRouter>
  )
}
