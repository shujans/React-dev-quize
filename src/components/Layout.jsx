import React from "react";
import style from "./style/Layout.module.css";
import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={style.main}>
        <div className={style.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
