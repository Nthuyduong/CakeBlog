import React from "react";
import {NavItem} from "react-bootstrap";
import {ROUTER} from "../../utils/constant";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowRight, faPerson, faSearch} from "@fortawesome/free-solid-svg-icons";


const Header = () =>{
    return(
        <div className="main-header">
            <div className="container-fluid">
                <div className="d-flex main-header-inner">
                    <div className="main-logo">
                        <img className="logo-web" src="./image/header/logo.svg" alt="#" loading="lazy"/>
                    </div>
                    <div className="header-content">
                        <Nav className="nav-menu">
                            <NavItem>
                                <Link className="item-name body_text" to="/">
                                    HOME
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={ROUTER.ABOUT} className="item-name body_text">
                                    ABOUT US
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={ROUTER.RECIPELIST} className="item-name body_text">
                                    RECIPE LIST
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={ROUTER.BLOG} className="item-name body_text">
                                    BLOG
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={ROUTER.CONTACT} className="item-name body_text">
                                    CONTACT
                                </Link>
                            </NavItem>
                        </Nav>
                    </div>
                    <div className="header-icon">
                        <FontAwesomeIcon className="icon-search" icon={faSearch}/>
                        <FontAwesomeIcon className="icon-user" icon={faPerson}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;