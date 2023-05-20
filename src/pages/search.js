import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    return (
        <div className="Search-page">
            {/*CONTACT BANNER*/}
            <div className="banner">
                <div className="banner-inner text-center text-light">
                    <div className="heading_2 banner-hi">~SEARCH FOR EVERYTHING~</div>
                    <div className="heading_5">A Place Of Inspiration</div>
                </div>
            </div>
            <div className="container-fluid">
                {/*SEARCH BAR HERE*/}
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="search-bar d-flex">
                            <input className="search-input w-100" type="text" placeholder="Search text..." />
                            <FontAwesomeIcon className="icon-search" icon={faSearch}/>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
                {/*TOP SEARCH*/}
                <div className="recent-update">
                    <div className="d-flex recent-title mb-4">
                        <div className="heading_4 mr-auto">Top Results</div>
                        <div className="medium_text">Showing: 4/12</div>
                    </div>
                    <div className="row recent-section">
                        <div className="col-3">
                            <div className="update-cart">
                                <img src="./image/recipelist/recent01.png"/>
                                <div className="update-title">
                                    <div className="small-text">
                                        Cake&Vegan
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
                                <img src="./image/recipelist/recent02.png"/>
                                <div className="update-title">
                                    <div className="small-text">
                                        Cake&Vegan
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
                                <img src="./image/recipelist/recent03.png"/>
                                <div className="update-title">
                                    <div className="small-text">
                                        Cake&Vegan
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
                                <img src="./image/recipelist/recent04.png"/>
                                <div className="update-title">
                                    <div className="small-text">
                                        Cake&Vegan
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
                    <div className="heading_4 mb-5">Suggest For You</div>
                    <div className="row">
                        {/*RECIPES LEFT*/}
                        <div className="col-4">
                            <div className="recipe-cart">
                                <img src="./image/recipelist/all-r01.jpg"/>
                                <div>Cake&Vegan</div>
                                <div className="heading_6">Chocolate Cream Cake</div>
                                <div>
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                    consequat quisque vitae ornare diam netus tellus.
                                </div>
                            </div>
                            <div className="line my-4"></div>
                            <div className="recipe-cart">
                                <img src="./image/recipelist/all-r02.png"/>
                                <div>Cake&Vegan</div>
                                <div className="heading_6">Chocolate Cream Cake</div>
                                <div>
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                    consequat quisque vitae ornare diam netus tellus.
                                </div>
                            </div>
                            <div className="line my-4"></div>
                            <div className="recipe-cart">
                                <img src="./image/recipelist/all-r03.png"/>
                                <div>Cake&Vegan</div>
                                <div className="heading_6">Chocolate Cream Cake</div>
                                <div>
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                    consequat quisque vitae ornare diam netus tellus.
                                </div>
                            </div>
                            <div className="line my-4"></div>
                            <div className="recipe-cart">
                                <img src="./image/recipelist/all-r04.png"/>
                                <div>Cake&Vegan</div>
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
                                <img src="./image/recipelist/all-r5.png"/>
                                <div>Cake&Vegan</div>
                                <div className="heading_6">Chocolate Cream Cake</div>
                                <div>
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                    consequat quisque vitae ornare diam netus tellus.
                                </div>
                            </div>
                            <div className="line my-4"></div>
                            <div className="recipe-cart">
                                <img src="./image/recipelist/all-r6.png"/>
                                <div>Cake&Vegan</div>
                                <div className="heading_6">Chocolate Cream Cake</div>
                                <div>
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                    consequat quisque vitae ornare diam netus tellus.
                                </div>
                            </div>
                            <div className="line my-4"></div>
                            <div className="recipe-cart">
                                <img src="./image/recipelist/all-r8.png"/>
                                <div>Cake&Vegan</div>
                                <div className="heading_6">Chocolate Cream Cake</div>
                                <div>
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                    consequat quisque vitae ornare diam netus tellus.
                                </div>
                            </div>
                            <div className="line my-4"></div>
                            <div className="recipe-cart">
                                <img src="./image/recipelist/all-r9.png"/>
                                <div>Cake&Vegan</div>
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
                                <img src="./image/recipelist/all-r9.png"/>
                                <div>Cake&Vegan</div>
                                <div className="heading_6">Chocolate Cream Cake</div>
                                <div>
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                    consequat quisque vitae ornare diam netus tellus.
                                </div>
                            </div>
                            <div className="line my-4"></div>
                            <div className="recipe-cart">
                                <img src="./image/recipelist/all-r10.png"/>
                                <div>Cake&Vegan</div>
                                <div className="heading_6">Chocolate Cream Cake</div>
                                <div>
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                    consequat quisque vitae ornare diam netus tellus.
                                </div>
                            </div>
                            <div className="line my-4"></div>
                            <div className="recipe-cart">
                                <img src="./image/recipelist/all-r11.png"/>
                                <div>Cake&Vegan</div>
                                <div className="heading_6">Chocolate Cream Cake</div>
                                <div>
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                    consequat quisque vitae ornare diam netus tellus.
                                </div>
                            </div>
                            <div className="line my-4"></div>
                            <div className="recipe-cart">
                                <img src="./image/recipelist/all-r12.png"/>
                                <div>Cake&Vegan</div>
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
        </div>
    )
}

export default Search;