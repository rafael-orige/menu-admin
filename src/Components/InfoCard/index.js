import React from "react";
import "./index.css";

const InfoCard = (props) => {
    return (
        <div className="card-area">
            <div className="card-image" style={{backgroundColor: props.imageColor}}>
                <img src={`${props.theme}.png`} alt="" />
            </div>
            <div className="card-text">
                <h1>{props.cardTitle}</h1>
                <strong><p>{props.cardText}</p></strong>
            </div>
        </div>
    );
}

export default InfoCard;