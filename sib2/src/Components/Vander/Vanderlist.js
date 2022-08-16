import React from "react";
import { Link } from "react-router-dom";

const Vanderlist = (props) => {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <hr />
        <Link to={`/Vender/${props.id}`} className="card-title">{props.name}</Link>
        <button
          
          className="btn follow-btn"
        >
          Follow
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Vanderlist;
