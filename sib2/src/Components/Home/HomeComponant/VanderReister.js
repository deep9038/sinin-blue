import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { useState } from "react";
import Axios from "axios";
// import { useEffect } from "react";
const VanderReister = (props) => {
  const [singelfile, setSigelfile] = useState();
  const [ multifile, setMultifile] = useState();

  // const formData = new FormData();

  //   if(multifile){
  //     Array.prototype.forEach.call(multifile,file=>{
  //     formData.append("multifile", file);
  //   });
  // }

  const [data, setData] = useState({
    Name: "",
    Fname: "",
    Lname: "",
    Email: "",
    Phonnumber: "",
    ccId: "",
    Pan: "",
    Password: "",
    Re_password: "",
  });
  const Handel = (e) => {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
  };

  const onsingalChange = (e) => {
    setSigelfile(e.target.files[0]);
  };
  // const onmultioffChange=e=>{
  //   const uplod=[...multifile]
  //   e.some((files)=>{
  //     if(uplod.findIndex((f)=>f.name===files.name)=== -1){
  //       uplod.push(files)
  //     }
  //   })
  // }
  const onmultiChange=(e)=>{
   setMultifile(e.target.files)
  }
 
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const url = "http://192.168.29.146:3000/api/vendor_Register";

  const Submit = (e) => {
    e.preventDefault();
    //   const formData=new FormData()
    // //   formData.append("profileImg",singelfile)
    //  formData.append("demoPhotoes",multifile)
    Axios.post(
      url,
      {
        Name: data.Name,
        Email: data.Email,
        Phonnumber: data.Phonnumber,
        Fname: data.Fname,
        Lname: data.Lname,
        ccId: data.ccId,
        Pan: data.Pan,
        profileImg: singelfile,
        demoPhotoes: multifile,
        Password: data.Password,
        Re_password: data.Re_password,
      },
      config
    )
      .then((res) => {
        console.log(res);
        console.log(singelfile, "eta hol singel file");
        console.log(multifile, "eta holo multupel file");
      })
      .catch(function (error) {
        alert(error.response.data);
      });
  };

  return (
    <form
      className="reg-box container"
      action="/Vender_Sign_up_post"
      method="post"
      onSubmit={(e) => Submit(e)}
    >
      <input
        type="text"
        name="Name"
        onChange={(e) => Handel(e)}
        placeholder="Enter User Name"
      />
      <div className="row inpu-things">
        <input
          onChange={(e) => Handel(e)}
          type="text"
          className="col-5"
          name="Fname"
          placeholder="First Name"
        />
        <input
          onChange={(e) => Handel(e)}
          type="text"
          className="col-5"
          name="Lname"
          placeholder="Last Name"
        />
      </div>
      <div className="row inpu-things">
        <input
          onChange={(e) => Handel(e)}
          type="email"
          className="col-5"
          name="Email"
          placeholder="Enter Emal"
        />
        <input
          onChange={(e) => Handel(e)}
          type="text"
          className="col-5"
          name="Phonnumber"
          placeholder="Enter Your PhonNumber"
        />
      </div>
      <div className="row inpu-things">
        <input
          onChange={(e) => Handel(e)}
          type="text"
          className="col-5"
          name="ccId"
          placeholder="Enter Your CCID"
        />
        <input
          onChange={(e) => Handel(e)}
          type="text"
          className="col-5"
          name="Pan"
          placeholder="Enter Your Pan"
        />
      </div>
      <div className="row inpu-things">
        <input
          onChange={(e) => Handel(e)}
          type="password"
          className="col-5"
          name="Password"
          placeholder="Enter Your Password"
        />
        <input
          onChange={(e) => Handel(e)}
          type="text"
          className="col-5"
          name="Re_password"
          placeholder="Re_Enter Password"
        />
      </div>
      <div className="photo-chous">
        <div>
          <input
            type="file"
            name="profileImg"
            multiple
            onChange={onsingalChange}
            // onChange={handleInputChange}
            className="inputfile"
          />
          <label htmlFor="profileImg" className="inputlabel">
            Choose a profile picture
          </label>
        </div>
        <div>
          <input
            type="file"
            name="demoPhotoes"
            
            multiple
            onChange={onmultiChange}
            // onChange={handleInputChange}
            className="inputfile"
          />
          <label htmlFor="demoPhotoes" className="inputlabel">
            Choose 4 Demo Photoes
          </label>
        </div>
      </div>
      <div className="danger">
        <CgDanger />
        <p>
          You need to uplod 4 of your best images in one folder to be eligible
          as a vender
        </p>
      </div>
      <input type="submit" value="Register" className="up-btn" />
      <div
        className="regbtn"
        onClick={() => {
          props.op(true);
        }}
      >
        <MdArrowBackIosNew />
      </div>
    </form>
  );
};

export default VanderReister;
