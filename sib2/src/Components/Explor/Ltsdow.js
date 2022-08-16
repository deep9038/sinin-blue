import React from "react";
import Ltsdowndata from "./Lesdowndata";
import Ltsdoncard from "./Ltsdoncard";
const Ltsdow = () => {
  return (
    <>
    
    <div className="container" >
      <div className="row d-flex justify-content-center">
      <h1>Latest uploads</h1>
        {Ltsdowndata.map((val,ind)=>{
          return(
           <Ltsdoncard  key={ind} img={val.img}  />
          )
        })}
      </div>
    </div>
    
    </>
  );
};

export default Ltsdow;
