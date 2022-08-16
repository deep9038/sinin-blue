import React from "react";
import Select from "./Select";
import catagory from "./Uplodcat";
import { useState } from "react";
import Axios from 'axios'
function Uplodsection() {
  const [data,setData]=useState({
    Tital:"",
    img_det:"",
    Cover_img:"",
    Video:"",
    Collections:[],
    CC:"",
    Category:[],
    Tags:[]
  })
  const Handel=(e)=>{
    const newdata={...data}
    newdata[e.target.name] = e.target.value
    setData(newdata)
}
let url="";
const Submit =(e)=>{
  e.preventDefault()
  console.log(data)
  Axios.post(url,{
    Tital:data.Tital,
    img_det:data.img_det,
    Cover_img:data.Cover_img,
    Video:data.Video,
    Collections:data.Collections,
    CC:data.CC,
    Category:data.Category,
    Tags:data.Tags
  }).then(res=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
}
  return (
    <form className="cintainer ulode" onSubmit={(e)=>Submit(e)} action="/pic_uplod_post" method="post">
      <h2>General</h2>
      <div className="uplod-iput">
        <div className="tittal">
          <div className="tittal-hading">
            <label htmlFor="">Tittal</label>
          </div>
          <input type="text" name="Tital" onChange={(e)=>Handel(e)} />
        </div> 
      
        <div className="tittal">
          <div className="tittal-hading">
            <label htmlFor="">Description</label>
          </div>
          <textarea name="img_det" onChange={(e)=>Handel(e)} id=""></textarea>
        </div>
        <div className="tittal">
          <div className="tittal-hading">
            <label htmlFor="">Cover Image</label>
          </div>

          <div className="radio-but">
            <input type="file" name="Cover_img" onChange={(e)=>Handel(e)} id=" file-input" />
            <div className="ulz-field-info">
              <span>Maximum upload file size: 552 MB.</span>
            </div>
          </div>
        </div>
        <div className="tittal">
          <div className="tittal-hading">
            <label htmlFor="">Video</label>
          </div>

          <div className="radio-but">
            <input type="file" name="Video" onChange={(e)=>Handel(e)} id=" file-input" />
            <div className="ulz-field-info">
              <span>Maximum upload file size: 552 MB.</span>
            </div>
          </div>
        </div>
        <div className="tittal">
          <div className="tittal-hading">
            <label htmlFor="">Collections</label>
          </div>

          <div className="radio-but">
            <div className="radio-cat-name">
                {catagory[0].map((val)=>{
                  return(
                  <Select item={val} Handel={Handel} name={"Collections"}/>
                  )
                })}
            </div>
          </div>
        </div>
        <div className="tittal">
          <div className="tittal-hading">
            <label htmlFor="">CC</label>
          </div>

          <div className="radio-but">
            <input type="file" name="CC" onChange={(e)=>Handel} id=" file-input" />
           
          </div>
        </div>       
        <div className="tittal">
          <div className="tittal-hading">
            <label htmlFor="">Category</label>
          </div>

          <div className="radio-but">
            <div className="radio-cat-name">
            {catagory[1].map((val)=>{
                  return(
                  <Select item={val} Handel={Handel} name={"Category"}/>
                  )
                })}
            </div>
          </div>
        </div>
        <div className="tittal">
          <div className="tittal-hading">
            <label htmlFor="">Tags</label>
          </div>

          <div className="radio-but">
            <div className="radio-cat-name">
            {catagory[2].map((val)=>{
                  return(
                  <Select item={val} Handel={Handel} name={"Tags"}/>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Uplodsection;
