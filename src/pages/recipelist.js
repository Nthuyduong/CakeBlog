import React from "react";

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
                <div className="heading_4">Recently updated</div>
                <div className="row">
                    <div className="col-3">
                        <div className="update-cart">
                            <img src="./image/recipelist/recent01.png"/>
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
                    <div className="col-3">
                        <div className="update-cart">
                            <img src="./image/recipelist/recent02.png"/>
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
                    <div className="col-3">
                        <div className="update-cart">
                            <img src="./image/recipelist/recent03.png"/>
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
                        <div className="recipe-cart">
                            <img src="./image/recipelist/all-r02.png"/>
                            <div>Cake&Vegan</div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                        <div className="recipe-cart">
                            <img src="./image/recipelist/all-r03.png"/>
                            <div>Cake&Vegan</div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
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
                        <div className="recipe-cart">
                            <img src="./image/recipelist/all-r6.png"/>
                            <div>Cake&Vegan</div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                        <div className="recipe-cart">
                            <img src="./image/recipelist/all-r8.png"/>
                            <div>Cake&Vegan</div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
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
                        <div className="recipe-cart">
                            <img src="./image/recipelist/all-r10.png"/>
                            <div>Cake&Vegan</div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
                        <div className="recipe-cart">
                            <img src="./image/recipelist/all-r11.png"/>
                            <div>Cake&Vegan</div>
                            <div className="heading_6">Chocolate Cream Cake</div>
                            <div>
                                Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                consequat quisque vitae ornare diam netus tellus.
                            </div>
                        </div>
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
    )
}

export default Recipelist;