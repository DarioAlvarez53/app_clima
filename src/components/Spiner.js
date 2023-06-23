import React from "react";
import "../assets/css/spiner.css";

const Spiner = () => {
    return(
        <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>
    );
}

export default Spiner;