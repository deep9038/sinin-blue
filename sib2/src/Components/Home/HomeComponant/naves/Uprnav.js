import React from 'react'
import { AiFillLock } from "react-icons/ai";
import "./Uprnav.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Uprnav = (props) => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  
  return (
    <>
    <div className={colorChange? "colorchang-nave" : "dont-colorchang-nave" }>
      <nav className="navbar navbar-expand uper">
        <div className="container-fluid justify-content-center">
          <Link to="/" className="navbar-brand">
            <img
              src="https://photos.shineinblue.com/wp-content/uploads/2022/05/logo-sib.png"
              alt="Brand-logo"
              // width={100}
            id='brand-img'
            />
            
          </Link >
          
          <div className="cintainer nav-manu uper-nav-manu">
            <ul className="navbar-nav m-auto ">
              <li className="nav-link">
                <Link to="/Explor">Home</Link >
              </li>
              <li className="nav-link">
                <Link to="/Collection">Explor</Link >
              </li>
              
              <li className="nav-link">
                <Link to="/About">About us</Link >
              </li>
              <li className="nav-link">
                <Link to="/Contact">Contact</Link >
              </li>
              <li className="nav-link">
                <Link to="/Pricing">Pricing</Link >
              </li>
            </ul>
          </div>
          <div className="container log-in-pannel">
            <div className="row d-flex align-items-center">
              <div className="col-6 log-in btn d-flex flex-row align-items-center ">
                {" "}
                <AiFillLock size={20} />
                <h5 className=" btn p-0 openmodalbutten " onClick={()=>{
                  props.set(true)
                }}>Sign in</h5>
                
              </div>
              <div className="col-6 border border-dark border-2 rounded-3 btn" onClick={()=>{props.conset(true)}}>
                <h5 className="d-flex align-items-center justify-content-center " style={{fontSize:'0.8rem'}}>
                  Contribute
                </h5>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Uprnav
