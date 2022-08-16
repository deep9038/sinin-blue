import React from "react";
import "./Dashbord.css";
import { useState } from "react";

import Navbar from "../Home/HomeComponant/Navbar";
import Contribute from "../Contribute";
import Modal from "../Home/HomeComponant/Modal";
import Sidenavefordas from "./Sidenavefordas";
import Acc from "./Acc";
import Footer from "../Footer/Footer";
import Bacimg from "../Home/HomeComponant/Bacimg";
const Dashbord = () => {
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
 
  return (
    <div>
      <div><Bacimg/></div>
      <Navbar op={setOpenmod} conset={setContribut} />
      <div className="container-fluid dasbord-conainer">
        <div className="desbord-devider row"> 
       
          <div className="col-3 ">
            <Sidenavefordas  />
          </div>
          
          <div className="desbord-matarial col-9">
            <h1>Dashboard</h1>
            <div className="ulz-author-cover">
              <img
                className="backimg"
                src="https://media.istockphoto.com/photos/liquefied-natural-gas-tanker-ship-in-sea-picture-id1317634535?b=1&k=20&m=1317634535&s=170667a&w=0&h=6Rfc6nsn5F42tGdQyoMugXPBIJ-_KS1veKJqKMuYdyI="
                alt=""
              />
              <div className="ulz--cover">
                <div className="ulz--inner">
                  <div className="ulz--heading">
                    <div className="ulz--cover-avatar">
                      <img src="" className="vanderimg" alt="" />
                    </div>
                    <div className="ulz--action">
                      <button
                        className="btn follow-btn"
                        data-modal="conversation"
                      >
                        <span>FOLLOW</span>
                      </button>
                      <p className="follower">9999k</p>
                    </div>
                  </div>
                  <h5 className="ulz--name">erik</h5>
                  <p className="ulz--bio"></p>
                </div>
              </div>
            </div>

            <Acc />
          </div>
        </div>
      </div>
      <Footer/>
      {opencontribut ? <Contribute closeconMod={setContribut} /> : ""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </div>
  );
};

export default Dashbord;
