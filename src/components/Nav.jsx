import React from "react";
import logo from "../assets/images/logo-bg.png";
import style from "./style/Nav.module.css";
import Account from "./Account";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to="/" className={style.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h1>Shujan's</h1>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
