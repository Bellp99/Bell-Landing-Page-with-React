import React from "react";

const Hero = () => {
    return(
        <>
        <div className="row bg-light">
            <div className="col-1">
            </div>
            <div className="col-10 flex-lg-row-reverse align-items-center g-5 py-5">
            <h1 className="display-5 fw-bold lh-1 mb-3">A Warm Welcome!</h1>
                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Call to action!</button>
                </div>
            </div>
            <div className="col-1">
            </div>
        </div>
        </>
    );
};

export default Hero;