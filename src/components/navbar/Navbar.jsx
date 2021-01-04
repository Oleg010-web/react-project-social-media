import { NavLink } from "react-router-dom";
import navBarModules from "./Navbar.module.css";

const Navbar = (props) => {
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
    <div>
        <h4>Friends Online</h4>
      <div className={navBarModules.navbarFriends}>
        <NavLink to={"/user/" + props.state[0].id} ><img src={props.state[0].photo} alt="Аватарка тут"/>{props.state[0].name}</NavLink>
        <NavLink to={"/user/" + props.state[1].id}><img src={props.state[1].photo} alt="Аватарка тут"/>{props.state[1].name}</NavLink>
      </div>
    </div>
  </nav>
}

export default Navbar;