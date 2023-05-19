import React from "react";
import {NavItem} from "react-bootstrap";
import {ROUTER} from "../../utils/constant";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <div>
            <div className="container-fluid">
                <div className="d-flex">
                    <img className="" src="./image/header/logo.svg" alt="#" loading="lazy"/>
                    <div className="header-content">
                        <Nav className="">
                            <NavItem>
                                <Link to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to={ROUTER.ABOUT}>About us</Link>
                            </NavItem>
                            <NavItem>
                                <Link to={ROUTER.RECIPELIST}>
                                    Recipes
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={ROUTER.BLOG}>
                                    Blog
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to={ROUTER.CONTACT}>
                                    Contact
                                </Link>
                            </NavItem>
                        </Nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;