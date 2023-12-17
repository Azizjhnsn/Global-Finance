import React from "react";


export default function SectionThree(){
    return(
        <>
                    {/* <!-- Projects--> */}
        <section className="projects-section bg-light" id="projects">
            <div className="container px-4 px-lg-5">
                {/* <!-- Featured Project Row--> */}
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="assets/img/bg-masthead.jpg" alt="..." /></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>Conditions</h4>
                            <p className="text-black-50 mb-0">Les prêts sont accordés aux emprunteurs âgés d'au moins 18 ans, qui disposent de revenus réguliers suffisants pour rembourser le prêt, qui n'ont pas un taux d'endettement trop élevé, qui peuvent fournir une garantie, si nécessaire, et qui ont un bon crédit score.
                                Si vous êtes dans une situation particulière ou ne répondez pas à certains critères, pas de panique! Veuillez nous contacter pour une aide personnalisée.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- Project One Row--> */}
                <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src="assets/img/demo-image-01.jpg" alt="..." /></div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">RUDDY</h4>
                                    <p className="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Project Two Row--> */}
                <div className="row gx-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src="assets/img/demo-image-02.jpg" alt="..." /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">RUDDY'S FRIEND</h4>
                                    <p className="mb-0 text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore neque totam assumenda simi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}