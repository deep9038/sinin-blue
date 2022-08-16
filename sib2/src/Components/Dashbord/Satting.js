import React from "react";
import { useState } from "react";
import Contribute from "../Contribute";
import Bacimg from "../Home/HomeComponant/Bacimg";
import Modal from "../Home/HomeComponant/Modal";
import Navbar from "../Home/HomeComponant/Navbar";
import Sidenavefordas from "./Sidenavefordas";
const Satting = () => {
  const [openmod, setOpenmod] = useState(false);
  const [opencontribut, setContribut] = useState(false);
  return (
    <div>
      <div><Bacimg/></div>
      <Navbar op={setOpenmod} conset={setContribut} />
      <div className="container-fluid dasbord-conainer">
        <div className="desbord-devider row">
          <div className="col-3 ">
            <Sidenavefordas />
          </div>
          <div className="desbord-matarial col-9">
            <h1>Account Satting</h1>
            <div>
              <p></p>
            </div>

            <form
              className="container from-setting"
              action="seting_chang"
              method="post"
            >
              <div className="name">
                <div>
                  <label className="form-label" htmlFor="FName">
                    First Name
                  </label>
                  <input className="form-control" type="text" name="FName" />
                </div>
                <div>
                  <label className="form-label" htmlFor="LNAme">
                    Last Name
                  </label>
                  <input className="form-control" type="text" name="LName" />
                </div>
              </div>
              <div>
                <label className="form-label" htmlFor="Display-Name">
                  Display Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="Display-Name"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="Email">
                  Email
                </label>
                <input className="form-control" type="email" name="Email" />
              </div>
              <h2 className="from-h2">Password chang</h2>
              <div>
                <label className="form-label" htmlFor="Pasword">
                  Current password{" "}
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="Pasword"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="New-password">
                  New password{" "}
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="New-password"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="Confirm_password">
                  Confirm new password
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="Confirm_password"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="From_ragister">
                  {" "}
                  Form Registration{" "}
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="From_ragister"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="Avatar_image">
                  Avatar image
                </label>
                <input
                  className="form-control type_file"
                  type="file"
                  name="Avatar_image"
                />
                <div class="ulz-field-info">
                  <span>Maximum upload file size: 552 MB.</span>
                </div>
              </div>
              <div>
                <label className="form-label" htmlFor="Cover_image">
                  Cover image
                </label>
                <input
                  className="form-control type_file"
                  type="file"
                  name="Cover_image"
                />
                <div class="ulz-field-info">
                  <span>Maximum upload file size: 552 MB.</span>
                </div>
              </div>
              <div>
                <label className="form-label" htmlFor="Biografical_text">
                  Biographical info
                </label>
                <textarea name="Biografical_text" cols="10" rows="4"></textarea>
              </div>
              <div className="d-flex justify-content-center ">
                <input
                  type="submit"
                  value="SAVE"
                  className="up-btn address-btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      {opencontribut ? <Contribute closeconMod={setContribut} /> : ""}
      {openmod && <Modal closeModal={setOpenmod} />}
    </div>
  );
};

export default Satting;
