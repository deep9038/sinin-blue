import React from "react";
import Uprnav from "./HomeComponant/naves/Uprnav";
import Undnav from "./HomeComponant/naves/Undnav";
import Surchbar from "../Surchbar";
import Bacimg from "./HomeComponant/Bacimg";
import "./Home.css";
// import Card from "../Card";
import Slide from "./HomeComponant/naves/Slide"
import { useState } from "react";
import Modal from "./HomeComponant/Modal";
import Contribute from "../Contribute";
// import ShowImages from "../ShowImages";
import Galary from "../Collaction/Galary";

function Home() {
  const [quary, setQuary] = useState();
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
  const [openimges, setOpenImges] = useState(false);
  
  // https://192.168.29.146:3000/api/vendorData

  return (
    <>
      <div>
        <Bacimg img="https://media4.giphy.com/media/fC6BAcnLFF2o/giphy.gif?cid=ecf05e47yhm99z7k5e0e85r3gbd55ukte6a450di39mubn47&rid=giphy.gif&ct=g"/>
      </div>
      <div className="homediv">
        <Uprnav set={setOpenmod} conset={setContribut} />
        <div className="d-flex  flex-column justify-content-center align-items-center container  hading">
          <h1>DIGITAL DOWNLOAD</h1>
          <h3>FOR</h3>
          <h1>EVERYONE</h1>
        </div>
        <Surchbar openImges={setOpenImges} setquary={setQuary} Quary={quary} />
        <div className="container">
        {openimges ? (
          quary.length>0 ? (
            <>
              <Slide Quary={quary} />
              <Galary  Quary={quary}/>
            </>
          ) : (
            <Slide  Quary={quary} />
          )
        ) : (
          <Slide  Quary={quary} />
        )}
        </div>

        <Undnav set={openmod} conset={setContribut} />
      </div>
      {opencontribut ? <Contribute closeconMod={setContribut} /> : ""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </>
  );
}

export default Home;
