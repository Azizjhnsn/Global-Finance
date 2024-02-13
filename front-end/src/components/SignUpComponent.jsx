import React from 'react';
import {BrowserRouter, Link } from "react-router-dom"

function SignUpComponent() {
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const formData = new FormData();
        formData.append('email', email)
        formData.append('message', message)

        // Sending data to express js endpoint
        try{
            const response = await fetch('https://globalfinanceintl.onrender.com/sendEmail', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify({email, message})
            });
            const data = await response.json();
            console.log(data);}catch(error){
            console.error(error);
            console.error("Error sending Email");
        }

    }
  return (
    <BrowserRouter>
                {/* <!-- Signup--> */}
        <section className="signup-section" id="signup">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5">Discutons de la façon dont nous pouvons vous aider à améliorer votre entreprise et votre condition de vie!</h2>

                        <form className="form-signup" id="contactForm"  action='https://globalfinanceintl.onrender.com/sendEmail' method='post' onSubmit={handleFormSubmit}>
                            {/* <!-- Email address input--> */}
                            <div className="row input-group-newsletter">
                                <div className="col"><input className="form-control" id="email" type="email" placeholder="Entrez un adresse mail..." data-sb-validations="required,email" name="email" /></div> 
                                <div className="col"><input className="form-control" id="message" type="text" placeholder="Entrez un message..." data-sb-validations="required" name="message"/></div>
                                <div className="col-auto"><button className="btn btn-primary" id="submitButton" >Envoyer un mail</button></div>
                            </div>
 
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </BrowserRouter>
  )
}

export default SignUpComponent