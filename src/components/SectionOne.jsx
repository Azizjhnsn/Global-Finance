import React from 'react'
import {BrowserRouter, Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

export default function SectionOne() {
  return (
    <BrowserRouter>  
              {/* <!-- Masthead--> */}
    <header className="masthead" id="SectionOne">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
            <div className="d-flex justify-content-center">
                <div className="text-center">
                    <h1 className="mx-auto my-0 text-uppercase">GLOBAL FINANCE INT'L</h1>
                    <h2 className="text-white-50 mx-auto mt-2 mb-5">Aide finaciaire de confiance.</h2>
                    <HashLink className="btn btn-primary" to="#sectionTwo">Demarrer</HashLink>
                </div>
            </div>
        </div>
    </header>
    </BrowserRouter>
  )
}
