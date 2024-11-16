import styles from "./SideBar.module.css";
import Logo from "./Logo.jsx"
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      {/**
       *   Outlet component provided by React Router comes into play.
       *    
       *   this component is where the children elements from the nested routes
       *   are stored
       * 
       *   it kind of works like the "children" prop
       * 
       *   This allows nested UI to show up when child routes are rendered.
       *   If the parent route matched exactly, it will render a child index route 
       *   or nothing if there is no index route.
       * */}
      <Outlet />

      <foote className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </foote>
    </div>
  );
}

export default SideBar;