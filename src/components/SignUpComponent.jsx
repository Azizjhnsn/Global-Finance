import React from 'react';
import {BrowserRouter, Link } from "react-router-dom"

function SignUpComponent() {
  return (
    <BrowserRouter>
                {/* <!-- Signup--> */}
        <section className="signup-section" id="signup">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5">Discutons de la façon dont nous pouvons vous aider à améliorer votre entreprise et votre condition de vie!</h2>
                        {/* <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!--> */}
                        <form className="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN" action='https://formspree.io/f/meqbdlll' method='post'>
                            {/* <!-- Email address input--> */}
                            <div className="row input-group-newsletter">
                                <div className="col"><input className="form-control" id="emailAddress" type="email" placeholder="Entrez un adresse mail..." aria-label="Entrez une adresse mail..." data-sb-validations="required,email" name="email" /></div> 
                                {/* <div className="col"><input className="form-control" id="emailAddress" type="text" placeholder="Entrez un message..." aria-label="Entrez une Message..." name="text"/></div> */}
                                <div className="col-auto"><button className="btn btn-primary disabled" id="submitButton" >Envoyer un mail</button></div>
                            </div>
                            <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">Il est obligatoir d'entrer une adresse Email.</div> 
                            <div className="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email Invalide.</div>
                            {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3 mt-2 text-white">
                                    <div className="fw-bolder">Formulaire envoye avec succes!</div>
                                    To activate this form, sign up at
                                    <br />
                                </div>
                            </div>
                            {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </BrowserRouter>
  )
}

export default SignUpComponent