import React, { useEffect } from "react";

import "./layout.css";

import TopNav from "../topnav/TopNav";
import Routes from "../Routes";

import { BrowserRouter, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <div className={`layout`}>
      <div className="layout__content">
        <TopNav />
        <div className="layout__content-main">
          <Routes />
        </div>
      </div>
    </div>
  );
};

export default Layout;
