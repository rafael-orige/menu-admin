import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import "./index.css";

const Header = (props) => {

    const [ searchStatus, setSearchStatus ] = useState(false);

    return (
        <header>
            <nav>
                <ul>
                    <li className="list-menu">
                        <div className="header-menu" onClick={props.onClick}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <img src={`${searchStatus ? "close-icon" : "search-icon"}.png`} alt="" className={`search-icon ${!searchStatus ? "active" : "active"}`} onClick={() => setSearchStatus(!searchStatus)}/>
                    </li>
                    <li>
                        <form className={`header-search ${searchStatus === false ? "disabled" : "active"}`} onSubmit={(event) => {event.preventDefault()}}>
                            <input type="search" placeholder="Search..." />
                        </form>
                    </li>
                    <li className={`header-buttons ${searchStatus ? "disabled" : "active"}`}>
                        <div className="header-navigation" data-tip="Navigation" data-for="tip-top" >
                            <div className="row-1">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="row-2">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            
                        </div>
                        <div className="settings" data-tip="Settings" data-for="tip-bottom">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </li>
                </ul>
            </nav>
            <ReactTooltip id="tip-top" place="top" effect="solid"/>
            <ReactTooltip id="tip-right" place="right" effect="solid"/>
        </header>
    );
}

export default Header;