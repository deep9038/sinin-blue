<>import { AiFillLock } from "react-icons/ai";
import { MdCollectionsBookmark } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { GrLogin } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
      {/* upernavber */}
      <nav className="navbar navbar-expand uper">
        <div className="container-fluid justify-content-center">
          <a href="/" className="navbar-brand">
            <img
              src="https://photos.shineinblue.com/wp-content/uploads/2022/05/logo-sib.png"
              alt="Brand-logo"
              width={100}
            />
          </a>
          <div className="cintainer nav-manu uper-nav-manu">
            <ul className="navbar-nav m-linkuto ">
              <li className="nav-link">
                <a href="/">Home</a>
              </li>
              <li className="nav-link">
                <a href="/Free-stok">Free stock</a>
              </li>
              <li className="nav-link">
                <a href="/Stock-poto-video">Stock poto and videos</a>
              </li>
              <li className="nav-link">
                <a href="/About-us">About us</a>
              </li>
              <li className="nav-link">
                <a href="/Contact">Contact</a>
              </li>
              <li className="nav-link">
                <a href="/Pricing">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="container log-in-pannel">
            <div className="row d-flex align-items-center">
              <div className="col-6 log-in btn d-flex flex-row align-items-center ">
                {" "}
                <AiFillLock size={20} />
                <h5 className="  ">Sign in</h5>
              </div>
              <div className="col-6 border border-dark border-2 rounded-3 btn">
                <h5 className="d-flex align-items-center justify-content-center ">
                  Contribute
                </h5>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* under navbar */}
      <nav className="navbar navbar-expand under-nav">
        <div className="container-fluid  ">
          <div className="cintainer nav-manu under-nav-manu">
            <ul className="navbar-nav m-linkuto down-nav-itams">
              <li className="nav-link ">
                <a href="/Colletions" className="flex-column">
                  {" "}
                  <i className="d-flex justify-content-center">
                    {" "}
                    <MdCollectionsBookmark size={23} />{" "}
                  </i>
                  <p>Collaction</p>
                </a>
              </li>
              <li className="nav-link">
                <a href="/Submisson" className="flex-column">
                  {" "}
                  <i className="d-flex justify-content-center">
                    {" "}
                    <AiOutlineAppstoreAdd size={23} />{" "}
                  </i>
                  <p>Submisson</p>
                </a>
              </li>
              <li className="nav-link">
                <a href="/Log-In" className="flex-column">
                  {" "}
                  <i className="d-flex justify-content-center">
                    {" "}
                    <GrLogin size={23} />{" "}
                  </i>
                  <p>LogIn</p>
                </a>
              </li>
              <li className="nav-link">
                <a href="/" className="flex-column " onClick={handelClick}>
                  {" "}
                  <i className="d-flex justify-content-center">
                    {" "}
                    <AiOutlineMenu size={23} />{" "}
                  </i>
                  <p>Menu</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar responsiv-navbar">
        
            <ul className={click?  "navbr-nav nav-mu show":"navbr-nav nav-mu "}>
            <li className="nav-link">
                <a href="/">Home</a>
              </li>
              <li className="nav-link">
                <a href="/Free-stok">Free stock</a>
              </li>
              <li className="nav-link">
                <a href="/Stock-poto-video">Stock poto and videos</a>
              </li>
              <li className="nav-link">
                <a href="/About-us">About us</a>
              </li>
              <li className="nav-link">
                <a href="/Contact">Contact</a>
              </li>
              <li className="nav-link">
                <a href="/Pricing">Pricing</a>
              </li>
            </ul>

      </nav>
    </>