import {Link} from "react-router-dom"
import logo from "../assets/images/logo.svg"
import "../assets/css/new_navbar copy.css";
import "../assets/css/global.css";

const Navbar = () => {
  return (
      <div className="nav-landing">
        <nav
          className="navbar navbar-expand-lg navbar-light"
          id="navbar-landing"
          style={{
           
          }}
        >
          <div
            id="navbar-container"
            className="container-fluid navbar-container-unscrolled"
          >
            <Link
              className="navbar-brand"
              to="/https://www.healthhighway.co.in/"
            >
               <img src={logo} alt="Health Highway Logo" />  
               <div className="logo-text">
                <span style={{ color: "#4ca9ee" }} className="logo-span">
                  Health
                </span>
                <span style={{ color: "#29e7cd" }} className="logo-span">
          
                  Highway
                </span>
              </div> 
            </Link>
            <button
              id="landing-joinus"
              type="button"
              className="btn btn-light"
              onClick="location.href='https://www.healthhighway.co.in/1-on-1-Pricing-Plan'"
            >
              Join Us
            </button>
          </div> 
        </nav>
      </div>
  
  );
};

export default Navbar;
