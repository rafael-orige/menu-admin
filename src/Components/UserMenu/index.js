import React, { useState, useEffect } from "react";
import "./index.css";

const UserMenu = (props) => {

    const [ menuResponsive, setMenuResponsive] = useState("285px");

    const handleMenuResponsive = () => {
        if(window.innerWidth <= 768) {
            setMenuResponsive("100vw");
        } else {
            setMenuResponsive("285px");
        }
    }

    window.addEventListener('resize', handleMenuResponsive);

    useEffect(() => {
        handleMenuResponsive();
    }, []);

    return (
        <div className="user-menu" style={{width: `${props.menuOpen ? menuResponsive : "0px"}`}}>
            <div className="menu-title">
                <h1>Material Admin</h1>
                <div className="close-btn" onClick={props.handleCloseMenu}>
                    <img src="close-icon.png" alt="" />
                </div>
            </div>
            <div className="user-info">
                <div className="user-photo">
                    <img src="user-image.png" alt="" />
                </div>
                <div className="user-name"><h2>User Admin</h2></div>
            </div>
            <nav className="user-menu--navigation">
                <ul>
                    <li>
                        <img src="stats-menu.png" alt="" />
                        Dashboard
                    </li>
                    <li>
                        <img src="forms.png" alt="" />
                        Form Page
                    </li>
                    <li>
                        <img src="tables.png" alt="" />
                        Table Page
                    </li>
                    <li>
                        <img src="login.png" alt="" />
                        Login Page
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default UserMenu;