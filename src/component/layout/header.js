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
        <div>
            <div className="container-fluid">
                <div className="d-flex main-header">
                    <div className="main-logo">
                        <img className="logo-web" src="./image/header/logo.svg" alt="#" loading="lazy"/>
                    </div>
                    <div className="header-content">
                        <Nav className="nav-menu">
                            <NavItem>
                                <Link className="medium_text nav-item" to="/">HOME</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="medium_text nav-item" to={ROUTER.ABOUT}>ABOUT US</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="medium_text nav-item" to={ROUTER.RECIPELIST}>
                                    RECIPE LIST
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="medium_text nav-item" to={ROUTER.BLOG}>
                                    BLOG
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link className="medium_text nav-item" to={ROUTER.CONTACT}>
                                    CONTACT
                                </Link>
                            </NavItem>
                        </Nav>
                    </div>
                    <div className="header-icon">
                        <FontAwesomeIcon className="icon-up" icon={faPerson}/>
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;