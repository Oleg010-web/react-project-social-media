import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import navBarModules from "./Navbar.module.css";


let mapStateToProps = (state) => {
  return {
    state : state.navbarPage.navbarData
  }
}

const NavbarContainer = connect (mapStateToProps) (Navbar);

export default NavbarContainer;