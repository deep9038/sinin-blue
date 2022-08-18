import React from "react";
import Navbar from "../Home/HomeComponant/Navbar";
import Surchbar from "../Surchbar";
import Galary from "./Galary";
import"./Collaction.css"
import { useState } from 'react';
import Modal from "../Home/HomeComponant/Modal";
import Contribute from "../Contribute";
import {GrLinkTop}from 'react-icons/gr'
import Footer from "../Footer/Footer";
import Bacimg from "../Home/HomeComponant/Bacimg";
const Collection = () => {
  const [flot,setFlot]=useState(false)
  const motaio=()=>{
    if(window.scrollY >=200){
      setFlot(false)
    }
    else{
      setFlot(true)
    }
  }
  const goToTop=()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }
  window.addEventListener('scroll', motaio);
  const [quary,setQuary]=useState()
  const [openmod,setOpenmod]=useState(false)
  const [opencontribut,setContribut]=useState(false)
  return (
    <>
    <div>
      <div><Bacimg img="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/></div>
      <Navbar op={setOpenmod}   conset={setContribut} />
      <div className="container exppool d-flex justify-content-center">
        <img
          src="https://photos.shineinblue.com/wp-content/uploads/2022/05/explore-word-made-outdoor-wilderness-260nw-1230559474-removebg-preview-1.png"
          // className="explor "
          alt=""
        />
      </div>
      <Surchbar  setquary={setQuary} Quary={quary} />
      <Galary Quary={quary}/>
      
    </div>
    <div className="up-button-con">
    <div className={flot? "d-none": " up-button vert-move"} onClick={goToTop}>
      <GrLinkTop size={30}/>
    </div>
    </div>
    <Footer/>
    {opencontribut ? <Contribute closeconMod={setContribut} />:""}
    { openmod && <Modal closeModal={setOpenmod}/>}
    </>
  );
};

export default Collection;
