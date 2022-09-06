import React, { useEffect } from "react";
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
import axios from "axios";

function Home() {
  const [quary, setQuary] = useState();
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
  const [openimges, setOpenImges] = useState(false);
  const [homeimg,setHomeimg]=useState()
  const [cat,setCat]=useState([])
  const url="http://192.168.29.146:3000/api/categoryAPI";
  // const addData=((a)=>setCat(a))
  useEffect(()=>{
    axios
    .get("http://192.168.29.146:3000/api/photoAboutContent_api")
    .then(res=>{
     setHomeimg(res.data.result)
     console.log(res.data.result)
})
    axios.get(url).then(res=>{
      console.log(res.data.result)
      setCat(res.data.result)
      
    }).catch(err=>{
      console.log(err)
    })
  },[])
  // https://192.168.29.146:3000/api/vendorData
  return (
    <>
      <div>
        <Bacimg img={`${process.env.REACT_APP_LOCALHOST_KEY}`}/>
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
              <Slide Quary={quary} cat={cat}/>
              <Galary  Quary={quary}/>
            </>
          ) : (
            <Slide  Quary={quary} cat={cat} />
          )
        ) : (
          <Slide  Quary={quary} cat={cat} />
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
