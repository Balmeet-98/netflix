import React from "react";
import "./Card.css";
const Card = ({ imgUrl, sName, btnUrl }) => {
  return (
    <div className="card m-3 p-3 col" style={{ width: "18rem" }}>
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-center">{sName}</h5>
        <p className="card-text d-flex justify-content-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti
          iure praesentium.
        </p>
        <div className="d-flex justify-content-center">
          <a href={btnUrl} className="btn btn-success">
            Watch Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
