import React from "react";
import {ROUTER} from "../utils/constant";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="">
                    {/*TOP TRENDING*/}
                    <div className="top-trend row">
                        <div className="col-3 trend-content">
                            <div className="content-inner">
                                <div className="medium_text">Top 3 Hottest Topic</div>
                                <div className="heading_4 my-3">Trending Recipes</div>
                                <div>One of the great aspects of social media is spotting trends faster than ever before.
                                    If you like to be ahead of the curve when it comes to cake, check out some of the
                                    sweetest</div>
                            </div>
                        </div>
                        <div className="col-4 trend-start">
                            <div className="trend-section">
                                <img src="./image/home/trend1.png"/>
                                <div className="trend-title row">
                                    <div className="heading_2">01/</div>
                                    <div className="trend-text">
                                        <div className="medium_text">Dessert</div>
                                        <div className="heading_6">CHOCOLATE CAKE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 trend-center">
                            <div className="trend-section">
                                <img src="./image/home/trend2.jpg"/>
                                <div className="trend-title">
                                    <div className="heading_2">02/</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 trend-end">
                            <div className="trend-section">
                                <img src="./image/home/trend3.jpg"/>
                                <div className="trend-title">
                                    <div className="heading_2">03/</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*RECENTLY UPDATE*/}
                    <div className="recently-update">
                        <div className="title row mb-5">
                            <div className="col-3"></div>
                            <div className="col-6 text-center">
                                <div className="heading_3 mb-3">Recently Update</div>
                                <div>Cake enthusiast? Checked our blog recently? Go on now.</div>
                            </div>
                            <div className="col-3"></div>
                        </div>
                        <div className="update">
                            <div className="row">
                                <div className="col-4">
                                    <div className="update-cart">
                                        <Link to={ROUTER.RECIPEDETAIL}>
                                            <img src="./image/home/update1.png"/>
                                        </Link>
                                        <div className="update-title">
                                            <div className="d-flex">
                                                <div className="small-text mr-auto">
                                                    Cake&Vegan
                                                </div>
                                                <div className="d-flex">
                                                    <div className="mr-1">80</div>
                                                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                                </div>
                                            </div>
                                            <div className="heading_6">
                                                Chocolate cream cake
                                            </div>
                                            <div className="description">
                                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.
                                                Blandit consequat quisque.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="update-cart">
                                        <Link to={ROUTER.RECIPEDETAIL}>
                                            <img src="./image/home/update2.png"/>
                                        </Link>
                                        <div className="update-title">
                                            <div className="d-flex">
                                                <div className="small-text mr-auto">
                                                    Cake&Vegan
                                                </div>
                                                <div className="d-flex">
                                                    <div className="mr-1">80</div>
                                                    <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                                </div>
                                            </div>
                                            <div className="heading_6">
                                                Chocolate cream cake
                                            </div>
                                            <div className="description">
                                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.
                                                Blandit consequat quisque.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="update-cart">
                                        <Link to={ROUTER.RECIPEDETAIL}>
                                            <img src="./image/home/update3.jpg"/>
                                        </Link>
                                        <div className="update-title">
                                            <div className="d-flex">
                                                <div className="small-text mr-auto">
                                                    Cake&Vegan
                                                </div>
                                                <div className="d-flex">
                                                    <div className="mr-1">80</div>
                                                    <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                                </div>
                                            </div>
                                            <div className="heading_6">
                                                Chocolate cream cake
                                            </div>
                                            <div className="description">
                                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.
                                                Blandit consequat quisque.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*SPECIAL CAKE*/}
                    <div className="special-cake">
                        <div className="row">
                            <div className="col-6 special-left">
                                <div className="left-inner">
                                    <div className="text-center">
                                        <div className="heading_6">Special cake</div>
                                        <div className="heading_4 my-2 text-pk">Happy Cream Day</div>
                                    </div>
                                    <img className="left-img" src="./image/home/special-inner.png"/>
                                </div>
                            </div>
                            <div className="col-6 special-right">
                                <div className="right-img">
                                    <img src="./image/home/special-right.png"/>
                                </div>
                                <div className="right-content">
                                    <div className="heading_5 mb-3">Chocolate cake</div>
                                    <div className="">
                                        Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.
                                        Blandit consequat quisque vitae ornare diam.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*FOR THIS SEASON*/}
                    <div className="for-season">
                        <div className="title row mb-5">
                            <div className="col-3"></div>
                            <div className="col-6 text-center">
                                <div className="heading_3 mb-3">For This Season</div>
                                <div>Cake enthusiast? Checked our blog recently? Go on now.</div>
                            </div>
                            <div className="col-3"></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="update-cart">
                                    <Link to={ROUTER.RECIPEDETAIL}>
                                        <img src="./image/home/season1.png"/>
                                    </Link>
                                    <div className="update-title">
                                        <div className="d-flex">
                                            <div className="small-text mr-auto">
                                                Cake&Vegan
                                            </div>
                                            <div className="d-flex">
                                                <div className="mr-1">80</div>
                                                <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                        <div className="medium_text">
                                            Chocolate cream cake
                                        </div>
                                        <div className="description">
                                            Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.
                                            Blandit consequat quisque.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="update-cart">
                                    <Link to={ROUTER.RECIPEDETAIL}>
                                        <img src="./image/home/season2.png"/>
                                    </Link>
                                    <div className="update-title">
                                        <div className="d-flex">
                                            <div className="small-text mr-auto">
                                                Cake&Vegan
                                            </div>
                                            <div className="d-flex">
                                                <div className="mr-1">80</div>
                                                <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                        <div className="medium_text">
                                            Chocolate cream cake
                                        </div>
                                        <div className="description">
                                            Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.
                                            Blandit consequat quisque.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="update-cart">
                                    <Link to={ROUTER.RECIPEDETAIL}>
                                        <img src="./image/home/season3.png"/>
                                    </Link>
                                    <div className="update-title">
                                        <div className="d-flex">
                                            <div className="small-text mr-auto">
                                                Cake&Vegan
                                            </div>
                                            <div className="d-flex">
                                                <div className="mr-1">80</div>
                                                <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                        <div className="medium_text">
                                            Chocolate cream cake
                                        </div>
                                        <div className="description">
                                            Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.
                                            Blandit consequat quisque.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="update-cart">
                                    <Link to={ROUTER.RECIPEDETAIL}>
                                        <img src="./image/home/season4.png"/>
                                    </Link>
                                    <div className="update-title">
                                        <div className="d-flex">
                                            <div className="small-text mr-auto">
                                                Cake&Vegan
                                            </div>
                                            <div className="d-flex">
                                                <div className="mr-1">80</div>
                                                <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                            </div>
                                        </div>
                                        <div className="medium_text">
                                            Chocolate cream cake
                                        </div>
                                        <div className="description">
                                            Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.
                                            Blandit consequat quisque.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*SIGN UP FOR EMAIL*/}
                    <div className="signup row">
                        <div className="col-7 signup-left">
                            <img src="./image/home/signup.jpg"/>
                        </div>
                        <div className="col-5 signup-right">
                            <div className="signup-content">
                                <div className="heading_4 signup-title mb-3">Sign Up For Email</div>
                                <div>Enter your email address to receive new posts in your inbox, as well as seasonal
                                    newsletters with
                                    extra goodies!
                                </div>
                                <div className="my-4">
                                    <div className="mb-2">Email address*</div>
                                    <input type="text" className="w-100"/>
                                </div>
                                <div className="pt-2">
                                    <button className="btn-primary w-100">Sign up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*FOLLOW ON INSTAGRAM*/}
                    <div className="follow">
                        <div className="row">
                            <div className="col-3 follow-left">
                                <div className="heading_6">
                                    Follow Us On Instagram!
                                </div>
                                <div className="line"></div>
                                <div className="list-box">
                                    <img src="./image/home/follow1.jpg"/>
                                </div>
                            </div>
                            <div className="col-3 follow-cen">
                                <div className="follow2 list-box">
                                    <img src="./image/home/follow2.jpg"/>
                                </div>
                                <div className="list-box">
                                    <img src="./image/home/follow3.jpg"/>
                                </div>
                            </div>
                            <div className="list-box col-3 follow-right">
                                <img src="./image/home/follow4.jpg"/>
                            </div>
                            <div className="list-box col-3 follow-right">
                                <img src="./image/home/follow5.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;