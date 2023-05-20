import React from "react";

const Recipedetail = () => {
    return (
        <div>
            <div className="container-fluid">
                {/*PAGINATION*/}
                <div></div>
                {/*RECIPE DETAIL HERE*/}
                <div className="row">
                    {/*ARTICLE CONTENT HERE*/}
                    <div className="col-8">
                        <div className="row">
                            <div className="col-10">
                                <div>Published Aug 19, 2022</div>
                                <div className="heading_3">Chocolate Raspberry Cream Cake</div>
                            </div>
                            <div className="col-2">
                                <div className="d-flex">
                                    <div>Prep</div>
                                    <div>15 Mins</div>
                                </div>
                                <div className="d-flex">
                                    <div>Prep</div>
                                    <div>15 Mins</div>
                                </div>
                                <div className="d-flex">
                                    <div>Prep</div>
                                    <div>15 Mins</div>
                                </div>
                                <div className="d-flex">
                                    <div>Prep</div>
                                    <div>15 Mins</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                    {/*SIDE BAR HERE*/}
                    <div className="col-3">
                        <div className="welcome">
                            <img src="./image/recipedetail/welcome.jpg"/>
                            <div className="welcome-content mt-4">
                                <div className="heading_6 mb-2">Welcome Foodlovers</div>
                                <div>Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit
                                    consequat quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque
                                    sed.</div>
                            </div>
                        </div>
                        {/*SIMILAR RECIPES*/}
                        <div className="simi-recipes my-5">
                            <div className="heading_6 mb-3">Similar recipes</div>
                            <div className="simi-section">
                                <div className="row">
                                    <div className="col-4">
                                        <img src="./image/recipedetail/simi01.jpg"/>
                                    </div>
                                    <div className="col-8">
                                        <div className="medium_text">Raspberry White Choco Cake</div>
                                        <div className="small_text">Wed 19/08/2022</div>
                                    </div>
                                </div>
                            </div>
                            <div className="line my-3"></div>
                            <div className="simi-section">
                                <div className="row">
                                    <div className="col-4">
                                        <img src="./image/recipedetail/simi01.jpg"/>
                                    </div>
                                    <div className="col-8">
                                        <div className="medium_text">Raspberry White Choco Cake</div>
                                        <div className="small_text">Wed 19/08/2022</div>
                                    </div>
                                </div>
                            </div>
                            <div className="line my-3"></div>
                            <div className="simi-section">
                                <div className="row">
                                    <div className="col-4">
                                        <img src="./image/recipedetail/simi01.jpg"/>
                                    </div>
                                    <div className="col-8">
                                        <div className="medium_text">Raspberry White Choco Cake</div>
                                        <div className="small_text">Wed 19/08/2022</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*SIGN UP FOR EMAIL*/}
                        <div>
                            <div className="heading_6 mb-3">Sign Up For Email</div>
                            <div className="my-3">Enter your email address to receive new posts in your inbox and seasonal
                                newsletters with extra goodies!</div>
                            <div>Email address</div>
                            <input className="w-100" type="text"/>
                            <button className="w-100 btn-pri-sm mt-4" type="submit">Sign up</button>
                        </div>
                        {/*SPECIAL CAKE*/}
                        <div>
                            <div className="heading_6">Let's Bake A Special Cake!</div>
                            <div>
                                <img src="./image/recipedetail/special01.jpg"/>
                            </div>
                            <div>
                                <img src="./image/recipedetail/special02.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipedetail;