import React from "react";

const Navbar = () => {
    return (
        <>
        <div className="row bg-dark">
            <div className="col-1">
            </div>
            <div className="col-10">
                <nav class="navbar navbar-dark">
                    <div className="container ml-5">
                        <a className="navbar-brand" href="#">Start Bootstrap </a>
                        <div className="d-flex d-grid gap-2 justify-content-end">
                            <li class="nav-item mb-3">
                                <a class="nav-link text-light" aria-current="page" href="#">Home</a>
                                </li>  
                                <li class="nav-item">
                                <a class="nav-link text-white-50" aria-current="page" href="#">About</a>
                                </li> 
                                <li class="nav-item">
                                <a class="nav-link text-white-50" aria-current="page" href="#">Services</a>
                                </li> 
                                <li class="nav-item">
                                <a class="nav-link text-white-50" aria-current="page" href="#">Contact</a>
                            </li>       
                        </div>
                    </div>
                </nav>
            </div>
            <div className="col-1">
            </div>
        </div>
        </>
    );
};

export default Navbar;