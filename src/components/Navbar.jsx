import navBarModules from "./Navbar.module.css";
const Navbar = () => {
    return  <nav className={navBarModules.nav}>
    <div className={`${navBarModules.item} ${navBarModules.active}`}>
      <a>Profile</a>
    </div>
    <div className={navBarModules.item}>
      <a>Messages</a>
    </div>
    <div className={navBarModules.item}>
      <a>News</a>
    </div>
    <div className={navBarModules.item}>
      <a>Music</a>
    </div>
    <div className={navBarModules.item}>
      <a>Settings</a>
    </div>
  </nav>
}

export default Navbar;