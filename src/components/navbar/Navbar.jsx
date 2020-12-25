import { NavLink } from "react-router-dom";
import navBarModules from "./Navbar.module.css";

const Navbar = () => {
    return  <nav className={navBarModules.nav}>
    <div className={`${navBarModules.item} ${navBarModules.active}`}>
      <NavLink to="/profile" activeClassName={navBarModules.active}>Profile</NavLink>
    </div>
    <div className={navBarModules.item}>
      <NavLink to="/dialogs" activeClassName={navBarModules.active}>Messages</NavLink>
    </div>
    <div className={navBarModules.item}>
      <NavLink to="/news" activeClassName={navBarModules.active}>News</NavLink>
    </div>
    <div className={navBarModules.item}>
      <NavLink to="/music" activeClassName={navBarModules.active}>Music</NavLink>
    </div>
    <div className={navBarModules.item}>
      <NavLink to="/settings" activeClassName={navBarModules.active}>Settings</NavLink>
    </div>
  </nav>
}

export default Navbar;