import React from "react";
import { Link, Outlet } from "react-router-dom";
import cssStyle from "./Header.module.scss";
const Header = () => {
    return (
        <>
            <div className={cssStyle.header}>
                <Link to={"/"} className={`${cssStyle.NavItem}`}>Home</Link>
                <Link to={"/register"} className={`${cssStyle.NavItem}`}>REGISTER</Link>
                <Link to={"/chart"} className={`${cssStyle.NavItem}`}>CHART</Link>
                <Link to={"/login"} className={`${cssStyle.NavItem}`}>LOGIN</Link>
            </div>
            <Outlet />
        </>
    );

};
export default Header;