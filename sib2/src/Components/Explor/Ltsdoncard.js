import React from "react";
import {AiOutlineDownload} from 'react-icons/ai'
import './Ltsdoncard.css'
const Ltsdoncard = (props) => {
  return (
    <div className="col-md-4 col-8 lts-container">
      <div className="card lts-card " style={{ width: "100%" }}>
        <img src={props.img} className="card-img-top  " alt="..." />
        
     
      </div>
      <button type="button" className="btn btn-dark rounded-circle lts-btn" style={{ width: "40px" , height:"40px" , padding:0 ,zIndex:1}} ><AiOutlineDownload  size={25}/></button>
    </div>
  );
};

export default Ltsdoncard;
