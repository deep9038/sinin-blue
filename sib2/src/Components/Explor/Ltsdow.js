import React, { useEffect, useState } from "react";
// import Ltsdowndata from "./Lesdowndata";
import Ltsdoncard from "./Ltsdoncard";
// import InfiniteScroll from 'react-infinite-scroll-component';
import  Axios  from "axios";
const Ltsdow = () => {
  const [apiimg,setApiImg]=useState([])
  const url="https://api.unsplash.com/photos/?client_id=a62Y46CiHSYk-WSX53eWgpSmz4fCGcb5B3dK-Jif5Z4"
  useEffect(()=>{
    Axios.get(url).then(res=>{
      console.log(res.data)
      setApiImg(res.data)
    })
  },[])

  
  return (
    <>
    <div className="container lt">
      <div className=" tl d-flex justify-content-center">
      <h1>Latest uploads</h1>
     
      <div className="photoset -square -portrait">
        {/* <InfiniteScroll
          dataLength={apiimg.length} 
          // next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        > */}
        {apiimg.map((val,ind)=>{
          return(
           <Ltsdoncard  key={ind} img={val.urls.full}  />
          )
        })}
     {/* </InfiniteScroll>   */}
        </div>
       
      </div>
    </div>
    
    </>
  );
};

export default Ltsdow;
