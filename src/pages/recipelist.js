import React from "react";
import {ROUTER} from "../utils/constant";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

const Recipelist = () => {
    return (
        <div className="container-fluid">
            <div className="recipe-list">
                {/*FOUR RECIPE BOX*/}
                <div className="recipe-box">
                    <div className="recipe-list-box row">
                        {/*BOX LEFT*/}
                        <div className="list-box col-5">
                            <img className="first-box" src="./image/recipelist/list01.jpg"/>
                            <div className="list-name">
                                <div className="heading_6">Cake&Occasions</div>
                            </div>
                        </div>
                        {/*BOX CENTER*/}
                        <div className="list-box col-3">
                            <img src="./image/recipelist/list02.jpg"/>
                            <div className="list-name">
                                <div className="heading_6">Dessert&Vegan</div>
                            </div>
                        </div>
                        {/*BOX RIGHT*/}
                        <div className="two-box col-4">
                            <div className="list-box box-top">
                                <img src="./image/recipelist/list03.jpg"/>
                                <div className="list-name">
                                    <div className="heading_6">Cake&Seasons</div>
                                </div>
                            </div>
                            <div className="list-box box-bottom">
                                <img src="./image/recipelist/list04.jpg"/>
                                <div className="list-name">
                                    <div className="heading_6">Cupcake</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*RECENTLY UPDATE*/}
            <div className="recent-update">
                <div className="d-flex recent-title mb-4">
                    <div className="heading_4 mr-auto">Recently updated</div>
                    <div className="medium_text">Showing: 4/12</div>
                </div>
                <div className="row recent-section">
                    <div className="col-3">
                        <div className="update-cart">
                            <Link to={ROUTER.RECIPEDETAIL}>
                                <img src="./image/recipelist/recent01.png"/>
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
                                    LEMON CHEESE CAKE
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
                                <img src="./image/recipelist/recent02.png"/>
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
                                    SWEET CHEESE CAKE
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
                                <img src="./image/recipelist/recent03.png"/>
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
                                    LASYO CREAM CAKE
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
                                <img src="./image/recipelist/recent04.png"/>
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
            {/*ALL RECIPES*/}
            <div className="all-recipes">
                <div className="all-title mb-5 text-center">
                    <div className="heading_4 mb-3">All Recipes</div>
                    <div>Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor.</div>
                </div>
                <div className="row">
                    {/*RECIPES LEFT*/}
                    <div className="col-4">
                        <div className="recipe-cart">
                            <Link to={ROUTER.RECIPEDETAIL}>
                                <img src="./image/recipelist/all-r01.jpg"/>
                            </Link>
                            <div className="d-flex">
                                <div className="small-text mr-auto">
                                    Cake&Vegan
                                </div>
                                <div className="d-flex">
                                    <div className="mr-1">80</div>
                                    <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                        <div className="line my-4"></div>
                        <div className="recipe-cart">
                            <Link to={ROUTER.RECIPEDETAIL}>
                                <img src="./image/recipelist/all-r02.png"/>
                            </Link>
                            <div className="d-flex">
                                <div className="small-text mr-auto">
                                    Cake&Vegan
                                </div>
                                <div className="d-flex">
                                    <div className="mr-1">80</div>
                                    <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                        <div className="line my-4"></div>
                        <div className="recipe-cart">
                            <Link to={ROUTER.RECIPEDETAIL}>
                                <img src="./image/recipelist/all-r03.png"/>
                            </Link>
                            <div className="d-flex">
                                <div className="small-text mr-auto">
                                    Cake&Vegan
                                </div>
                                <div className="d-flex">
                                    <div className="mr-1">80</div>
                                    <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                        <div className="line my-4"></div>
                        <div className="recipe-cart">
                            <Link to={ROUTER.RECIPEDETAIL}>
                                <img src="./image/recipelist/all-r04.png"/>
                            </Link>
                            <div className="d-flex">
                                <div className="small-text mr-auto">
                                    Cake&Vegan
                                </div>
                                <div className="d-flex">
                                    <div className="mr-1">80</div>
                                    <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                    </div>
                    {/*RECIPE CENTER*/}
                    <div className="col-4">
                        <div className="recipe-cart">
                            <Link to={ROUTER.RECIPEDETAIL}>
                                <img src="./image/recipelist/all-r5.png"/>
                            </Link>
                            <div className="d-flex">
                                <div className="small-text mr-auto">
                                    Cake&Vegan
                                </div>
                                <div className="d-flex">
                                    <div className="mr-1">80</div>
                                    <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                        <div className="line my-4"></div>
                        <div className="recipe-cart">
                            <Link to={ROUTER.RECIPEDETAIL}>
                                <img src="./image/recipelist/all-r6.png"/>
                            </Link>
                            <div className="d-flex">
                                <div className="small-text mr-auto">
                                    Cake&Vegan
                                </div>
                                <div className="d-flex">
                                    <div className="mr-1">80</div>
                                    <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                        <div className="line my-4"></div>
                        <div className="recipe-cart">
                            <Link to={ROUTER.RECIPEDETAIL}>
                                <img src="./image/recipelist/all-r8.png"/>
                            </Link>
                            <div className="d-flex">
                                <div className="small-text mr-auto">
                                    Cake&Vegan
                                </div>
                                <div className="d-flex">
                                    <div className="mr-1">80</div>
                                    <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                        <div className="line my-4"></div>
                        <div className="recipe-cart">
                            <Link to={ROUTER.RECIPEDETAIL}>
                                <img src="./image/recipelist/all-r9.png"/>
                            </Link>
                            <div className="d-flex">
                                <div className="small-text mr-auto">
                                    Cake&Vegan
                                </div>
                                <div className="d-flex">
                                    <div className="mr-1">80</div>
                                    <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                    </div>
                    {/*RECIPE RIGHT*/}
                    <div className="col-4">
                        <div className="recipe-cart">
                            <Link to={ROUTER.RECIPEDETAIL}>
                                <img src="./image/recipelist/all-r9.png"/>
                            </Link>
                            <div className="d-flex">
                                <div className="small-text mr-auto">
                                    Cake&Vegan
                                </div>
                                <div className="d-flex">
                                    <div className="mr-1">80</div>
                                    <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                        <div className="line my-4"></div>
                        <div className="recipe-cart">
                            <Link to={ROUTER.RECIPEDETAIL}>
                                <img src="./image/recipelist/all-r10.png"/>
                            </Link>
                            <div className="d-flex">
                                <div className="small-text mr-auto">
                                    Cake&Vegan
                                </div>
                                <div className="d-flex">
                                    <div className="mr-1">80</div>
                                    <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                        <div className="line my-4"></div>
                        <div className="recipe-cart">
                            <Link to={ROUTER.RECIPEDETAIL}>
                                <img src="./image/recipelist/all-r11.png"/>
                            </Link>
                            <div className="d-flex">
                                <div className="small-text mr-auto">
                                    Cake&Vegan
                                </div>
                                <div className="d-flex">
                                    <div className="mr-1">80</div>
                                    <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                        <div className="line my-4"></div>
                        <div className="recipe-cart">
                            <Link to={ROUTER.RECIPEDETAIL}>
                                <img src="./image/recipelist/all-r12.png"/>
                            </Link>
                            <div className="d-flex">
                                <div className="small-text mr-auto">
                                    Cake&Vegan
                                </div>
                                <div className="d-flex">
                                    <div className="mr-1">80</div>
                                    <FontAwesomeIcon className="als-center" icon={faHeart}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipelist;