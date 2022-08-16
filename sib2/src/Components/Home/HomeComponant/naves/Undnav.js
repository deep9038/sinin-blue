import React from 'react'
import { MdCollectionsBookmark } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GrLogin } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import "./Undernav.css"
import Curcalnav from './Curcalnav';
import { useState } from 'react';
const Undnav = (props) => {
  const [click,setclick]=useState(false)
  const active=()=>setclick(!click)
  return (
    <div>
      <nav className="navbar navbar-expand under-nav">
        <div className="container-fluid  ">
          <div className="cintainer nav-manu under-nav-manu">
            <ul className="navbar-nav m-linkuto down-nav-itams">
              <li className="nav-link ">
                <Link to="/Collection" className="flex-column">
                  {" "}
                  <i className="d-flex justify-content-center">
                    {" "}
                    <MdCollectionsBookmark size={23} />{" "}
                  </i>
                  <p>Collaction</p>
                </Link >
              </li>
              <li style={{color:"black"}} className="nav-link" onClick={()=>{
                props.conset(true)
              }}>
            
                  {" "}
                  <i className="d-flex justify-content-center">
                    {" "}
                    <AiOutlineAppstoreAdd size={23} />{" "}
                  </i>
                  <p>Submisson</p>
               
              </li>
              <li className="nav-link" onClick={()=>{
                  props.set(true)
                }}>
                <div className="flex-column">
                  {" "}
                  <i className="d-flex justify-content-center">
                    {" "}
                    <GrLogin size={23} />{" "}
                  </i>
                  <p style={{color:"black"}}>LogIn</p>
                </div>
              </li>
              <li className="nav-link">
                
                <Link to="#" className="flex-column " onClick={active}>
                  {" "}
                  <i className="d-flex justify-content-center">
                    {" "}
                    <AiOutlineMenu size={23} />{" "}
                  </i>
                  <p>Menu</p>
                </Link >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {click? <Curcalnav click={click}/> :""}
    </div>
  )
}

export default Undnav
