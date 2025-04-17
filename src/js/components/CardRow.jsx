import React from "react";
import Card from "./Card";

const CardRow = () => {
    return (
        <>
        <div className="row bg-light">
            <div className="col-1">
            </div>
            <div className="col-10 d-flex">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="col-1">
            </div>
        </div>
        
        </>
    );
};

export default CardRow;