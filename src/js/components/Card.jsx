import React from "react";

const Card = () => {
    return (
        <>
        <div className="card text-center" style={{width: "18rem", margin: "5px 5px 10px 5px"}}>
            <img src="https://picsum.photos/id/1/55/25" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="card-footer">
                 <a href="#" className="btn btn-primary m-3">Find out more</a>
            </div>
            </div>
        </>
    );
};

export default Card;