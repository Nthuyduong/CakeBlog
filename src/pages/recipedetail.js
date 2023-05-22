import React, { useState, useEffect } from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import StickyBox from "react-sticky-box";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpLong} from "@fortawesome/free-solid-svg-icons";

const Recipedetail = () => {
    const [open, setOpen] = useState(Array(10).fill(false));
    const toogleSection = (index) => {
        const newopen = [...open];
        newopen[index] = !newopen[index];
        setOpen(newopen);
    }

    const sectionContent = [
        {
            question: "Question here",
            answer: "answer here",
        },
        {
            question: "Question here",
            answer: "answer here",
        },
        {
            question: "Question here",
            answer: "answer here",
        },
        {
            question: "Question here",
            answer: "answer here",
        },
        {
            question: "Question here",
            answer: "answer here",
        },
    ]
    return (
        <div className="recipe-detail">
            <div className="container-fluid">
                {/*BREADCRUMB*/}
                <div className="mt-3">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                            Trending Reipes
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Recipe detail</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                {/*RECIPE DETAIL HERE*/}
                <div className="row mt-5">
                    {/*ARTICLE CONTENT HERE*/}
                    <div className="col-9">
                        <div className="row">
                            <div className="col-10">
                                <div>Published Aug 19, 2022</div>
                                <div className="heading_3 mt-3">Chocolate Raspberry Cream Cake</div>
                            </div>
                            <div className="col-2">
                                <div className="d-flex">
                                    <div className="mr-2 text-pk">Prep</div>
                                    <div>15 Mins</div>
                                </div>
                                <div className="d-flex">
                                    <div className="mr-2 text-pk">Cook</div>
                                    <div>15 Mins</div>
                                </div>
                                <div className="d-flex">
                                    <div className="mr-2 text-pk">Level</div>
                                    <div>Easy</div>
                                </div>
                                <div className="d-flex">
                                    <div className="mr-2 text-pk">SER/FS</div>
                                    <div>02</div>
                                </div>
                            </div>
                        </div>
                        {/*FOUR BUTTON ARE HERE*/}
                        <div className="row my-5">
                            <div className="col-3">
                                <button className="w-100 btn-primary">Facebook</button>
                            </div>
                            <div className="col-3">
                                <button className="w-100 btn-primary">Instagram</button>
                            </div>
                            <div className="col-3">
                                <button className="w-100 btn-primary">Pinterest</button>
                            </div>
                            <div className="col-3">
                                <button className="w-100 btn-primary">Print recipe</button>
                            </div>
                        </div>
                        {/*ARTICLE CONTENT HERE*/}
                        <div className="">
                            <div className="">
                                <div>Calling all chocolate lovers! This heavenly Chocolate Cream Cake consists of three
                                    moist chocolate cake layers filled with homemade chocolate pastry cream, and frosted
                                    with chocolate cream cheese frosting.
                                </div>
                                <div className="my-2">Today, we are using our scratch Chocolate Sour Cream Cake recipe, but feel free to
                                    swap in any of your favorite chocolate cakes (our classic chocolate cake, & chocolate
                                    velvet cake recipes are great choices too)!
                                </div>
                                <div className="">This moist chocolate cake is soft, fluffy, and has a wonderful texture. You will love
                                    it! The recipe calls for the Reverse Creaming Method of mixing which means that we will
                                    be adding the ingredients in a different order than usual. You can find the full, printable chocolate cream cake recipe further down in this post
                                    but here is a quick rundown of our steps!
                                </div>
                            </div>
                            <img className="my-4" src="./image/recipedetail/article01.jpg"/>
                            <div>
                                <div className="">Today, we are using our scratch Chocolate Sour Cream Cake recipe, but feel free to
                                    swap in any of your favorite chocolate cakes (our classic chocolate cake, & chocolate
                                    velvet cake recipes are great choices too)!
                                </div>
                                <div className="mt-2">This moist chocolate cake is soft, fluffy, and has a wonderful texture. You will love
                                    it! The recipe calls for the Reverse Creaming Method of mixing which means that we will
                                    be adding the ingredients in a different order than usual. You can find the full, printable chocolate cream cake recipe further down in this post
                                    but here is a quick rundown of our steps!
                                </div>
                            </div>
                            <div className="row my-5">
                                <div className="col-5">
                                    <div className="d-flex">
                                        <div className="heading_5 text-pk mb-4">INGREDIENT</div>
                                        {/*<div className="line"></div>*/}
                                    </div>
                                    <div className="">
                                        <div className="medium_text mb-3">For the Chocolate Cake:</div>
                                        <div className="d-flex">
                                            <div className="mr-3">1 ½</div>
                                            <div>cups all-purpose flour</div>
                                        </div>
                                        <div className="d-flex my-2">
                                            <div className="mr-3">¾</div>
                                            <div>cup unsweetened cocoa powder (sifted)</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="mr-3">1 ½ </div>
                                            <div>teaspoons baking soda</div>
                                        </div>
                                        <div className="d-flex my-2">
                                            <div className="mr-3">1</div>
                                            <div>teaspoon baking powder</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="mr-3">¾</div>
                                            <div>cup granulated sugar</div>
                                        </div>
                                        <div className="d-flex my-2">
                                            <div className="mr-3">¾ </div>
                                            <div>cup light brown sugar (packed)</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="mr-3">¾</div>
                                            <div>teaspoon salt</div>
                                        </div>
                                        <div className="d-flex my-2">
                                            <div className="mr-3">¾</div>
                                            <div>large eggs</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="mr-3">¾</div>
                                            <div>cup vegetable oil</div>
                                        </div>
                                        <div className="d-flex my-2">
                                            <div className="mr-3">¾</div>
                                            <div>cup buttermilk (room temperature)</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="mr-3">¾</div>
                                            <div>teaspoons vanilla extract</div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="mr-3">¾</div>
                                            <div>cup hot chocolate (hot, made with milk)</div>
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <div className="medium_text mb-3">For the Marshmallow Fluff:</div>
                                        <div className="d-flex">
                                            <div className="mr-3">¾</div>
                                            <div>cup water</div>
                                        </div>
                                        <div className="d-flex my-2">
                                            <div className="mr-3">¾</div>
                                            <div>cup granulated sugar</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="mr-3">¾</div>
                                            <div>large egg whites</div>
                                        </div>
                                        <div className="d-flex mt-2">
                                            <div className="mr-3">¾</div>
                                            <div>teaspoon cream of tartar</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="medium_text mb-3">For the Chocolate Frosting</div>
                                        <div className="d-flex">
                                            <div className="mr-3">5</div>
                                            <div>Large egg whites</div>
                                        </div>
                                        <div className="d-flex my-2">
                                            <div className="mr-3">1 ¼</div>
                                            <div>cups granulated sugar</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="mr-3">1 ½</div>
                                            <div>cups unsalted butter, cubed (room temperature)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <img src="./image/recipedetail/article02.jpg"/>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex">
                                    <div className="heading_5 text-pk">INSTRUCTIONS</div>
                                    {/*<div className="line"></div>*/}
                                </div>
                                <div className="row mt-5">
                                    <div className="col-4">
                                        <div className="heading_5 text-pk mb-2">01/</div>
                                        <div className="medium_text">Lemon Poppy Seed Cake:</div>
                                    </div>
                                    <div className="col-8">
                                        <ol>
                                            <li>Preheat oven to 350F. Grease and flour three 6" cake rounds and line with parchment.</li>
                                            <li>In a medium bowl, whisk flour, poppy seeds, baking powder, and salt until
                                                well combined. Set aside.
                                            </li>
                                            <li>Using a stand mixer fitted with a paddle attachment, cream butter and
                                                lemon zest until smooth. Add sugar and beat on med-high until pale and
                                                fluffy (approx 3mins).
                                            </li>
                                            <li>Reduce speed and add eggs one at a time fully incorporating after each addition. Add vanilla.</li>
                                            <li>Alternate adding flour mixture with milk & lemon juice, beginning and ending
                                                with flour (3 additions of flour and 2 of milk & lemon juice). Fully
                                                incorporating after each addition.
                                            </li>
                                            <li>Spread batter evenly between the prepared pans and smooth the tops. </li>
                                            <li>Bake for about 30-35mins or until a toothpick inserted into the center comes out mostly clean.</li>
                                            <li>Place cakes on wire rack to cool for 10mins then turn out onto wire rack to cool completely</li>
                                        </ol>
                                    </div>
                                </div>
                                <img className="my-4" src="./image/recipedetail/article03.jpg"/>
                                <div className="row my-5">
                                    <div className="col-4">
                                        <div className="heading_5 text-pk mb-2">02/</div>
                                        <div className="medium_text">Lemon Simple Syrup:</div>
                                    </div>
                                    <div className="col-8">
                                        Place lemon juice and sugar into a small saucepan, stir to combine. Cook over medium
                                        heat, stirring often, until simmering and all sugar has dissolved. Cool completely
                                        before using on cake.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="heading_5 text-pk mb-2">03/</div>
                                        <div className="medium_text">Cream Cheese Frosting:</div>
                                    </div>
                                    <div className="col-8">
                                        <ol>
                                            <li>Using a stand mixer or hand mixer beat butter until pale and creamy.</li>
                                            <li className="my-2">Reduce speed to low. Add powdered sugar 1 cup at a time and mix on low
                                                until well blended. Increase speed to medium and beat for 3 minutes. Add
                                                vanilla and continue to beat on medium for 1 minute.
                                            </li>
                                            <li>Slowly add chilled cream cheese one cube at a time (about 1 tablespoon at
                                                a time). Beat well until blended and ensure no lumps of cream cheese remain.
                                            </li>
                                            <li className="my-2">If needed, add cornstarch or meringue powder 1 tablespoon at a time to
                                                stiffen the frosting (I didn't but this is an option). Add a pinch of salt
                                                to cut some sweetness if desired.
                                            </li>
                                            <li>
                                                Run mixer on low for a couple of minutes to remove any air bubbles.
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <img className="my-4" src="./image/recipedetail/article04.jpg"/>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="heading_5 text-pk mb-2">04/</div>
                                        <div className="medium_text">Assembly:</div>
                                    </div>
                                    <div className="col-8">
                                        <ol>
                                            <li>Trim the crust off the top of each cake layer and brush each with the
                                                lemon simple syrup. About 1-2 Tbsp per layer.
                                            </li>
                                            <li className="my-2">Place one layer of cake on a cake stand or serving plate. Top with 2/3
                                                cup of frosting, spread evenly. Repeat with the remaining layers and apply
                                                a thin coat of frosting all over the cake. Chill for 20mins.
                                            </li>
                                            <li>Use the remaining frosting to frost the cake in a rustic manner.</li>
                                            <li className="mt-2">Decorate with fresh, edible flowers and lemon slices if desired.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="my-5">
                                <div className="d-flex">
                                    <div className="heading_5 mb-4 text-pk">NUTRITIONAL INFORMATION</div>
                                    {/*<div className="line"></div>*/}
                                </div>
                                <div>The nutritional information and metric conversions are calculated automatically. I
                                    cannot guarantee the accuracy of this data. If this is important to you, please verify
                                    with your favorite nutrition calculator and/or metric conversion tool.
                                </div>
                                <div className="row mt-3">
                                    <div className="col-3">
                                        <div>Calories: 670kcal</div>
                                        <div className="my-2">Carbohydrates: 82g</div>
                                        <div>Protein: 6g</div>
                                        <div className="my-2">Fat: 36g</div>
                                        <div>Saturated Fat: 22g</div>
                                        <div className="mt-2">Polyunsaturated Fat: 2g</div>
                                    </div>
                                    <div className="col-3">
                                        <div>Monounsaturated Fat: 9g</div>
                                        <div className="my-2">Trans Fat: 1g</div>
                                        <div>Cholesterol: 139mg</div>
                                        <div className="my-2">Sodium: 187mg</div>
                                        <div>Potassium: 213mg</div>
                                        <div className="mt-2">Fiber: 1g</div>
                                    </div>
                                    <div className="col-3">
                                        <div>Sugar: 62g</div>
                                        <div className="my-2">Vitamin A: 1175IU</div>
                                        <div>Vitamin C: 5mg</div>
                                        <div className="my-2">Calcium: 126mg</div>
                                        <div>Iron: 2mg</div>
                                    </div>
                                    <div className="col-3"></div>
                                </div>
                            </div>
                            <div className="">
                                <div className="d-flex">
                                    <div className="heading_5 mb-4 text-pk">FREQUENTLY ASKED QUESTIONS</div>
                                    {/*<div className="line"></div>*/}
                                </div>
                                {sectionContent.map((section,index) => (
                                <div className="accordion-cart" key={index}>
                                    <div className="d-flex accor-ques">
                                        <div>{section.question}</div>
                                        <div className="ml-auto">
                                            <FontAwesomeIcon icon={faArrowUpLong} className="" onClick={() => toogleSection(index)}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                    {open[index] && (
                                    <div className="accor-answer">
                                        {section.answer}
                                    </div>
                                    )}
                                </div>
                                    ))}
                            </div>
                            {/*MAY YOU LIKE THIS*/}
                            <div className="my-5">
                                <div className="heading_5 mb-4 text-pk text-center">MAY YOU LIKE THIS</div>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="suggest-cart">
                                            <img src="./image/recipedetail/may01.png"/>
                                            <div className="suggest-title">
                                                <div className="small_text">Dessert&Vegan</div>
                                                <div className="medium_text">CHOCO CREAM CAKE</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="suggest-cart">
                                            <img src="./image/recipedetail/may02.png"/>
                                            <div className="suggest-title">
                                                <div className="small_text">Dessert&Vegan</div>
                                                <div className="medium_text">APPLE CREAM CAKE</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="suggest-cart">
                                            <img src="./image/recipedetail/may03.png"/>
                                            <div className="suggest-title">
                                                <div className="small_text">Dessert&Vegan</div>
                                                <div className="medium_text">APPLE CREAM CAKE</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*COMMENTS*/}
                            <div>
                                <div className="heading_5 text-pk text-center mb-4">COMMENTS</div>
                                <div>
                                    <div className="cmt-section">
                                        <div className="d-flex">
                                            <div className="avt">
                                                <img src="./image/recipedetail/avt01.png"/>
                                            </div>
                                            <div className="cmt-name mr-auto ml-2">
                                                <div className="small_text">3 days ago</div>
                                                <div className="medium_text">Nthduong</div>
                                            </div>
                                            <div className="cmt-like">
                                                <div className="d-flex">
                                                    <div>10</div>
                                                    <div>heart</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>Baking time will vary if you change the pan size. Every oven is different
                                            so I can’t say for certain what you’ll need to adjust it to. Be  sure to
                                            check on the cakes while they are baking.
                                        </div>
                                    </div>
                                    <div className="line my-4"></div>
                                    <div className="cmt-section">
                                        <div className="d-flex">
                                            <div className="avt">
                                                <img src="./image/recipedetail/avt01.png"/>
                                            </div>
                                            <div className="cmt-name mr-auto ml-2">
                                                <div className="small_text">3 days ago</div>
                                                <div className="medium_text">Nthduong</div>
                                            </div>
                                            <div className="cmt-like">
                                                <div className="d-flex">
                                                    <div>10</div>
                                                    <div>heart</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>Baking time will vary if you change the pan size. Every oven is different
                                            so I can’t say for certain what you’ll need to adjust it to. Be  sure to
                                            check on the cakes while they are baking.
                                        </div>
                                    </div>
                                    <div className="line my-4"></div>
                                    <div className="cmt-section">
                                        <div className="d-flex">
                                            <div className="avt">
                                                <img src="./image/recipedetail/avt01.png"/>
                                            </div>
                                            <div className="cmt-name mr-auto ml-2">
                                                <div className="small_text">3 days ago</div>
                                                <div className="medium_text">Nthduong</div>
                                            </div>
                                            <div className="cmt-like">
                                                <div className="d-flex">
                                                    <div>10</div>
                                                    <div>heart</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>Baking time will vary if you change the pan size. Every oven is different
                                            so I can’t say for certain what you’ll need to adjust it to. Be  sure to
                                            check on the cakes while they are baking.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*LEAVE COMMENT*/}
                            <div className="my-5">
                                <div className="text_pk heading_5"></div>
                                <div>Your email address will not be published. Required fields are marked *</div>
                                <div className="cmt-form">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*SIDE BAR HERE*/}
                    <div className="col-3 sidebar">
                        <StickyBox offsetTop={20} offsetBottom={20}>
                            <div>
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
                                <div className="special-day my-5">
                                    <div className="heading_6 my-3">Let's Bake A Special Cake!</div>
                                    <div className="special-cart mb-3">
                                        <img src="./image/recipedetail/special01.jpg"/>
                                        <div className="text-light heading_6 special-title">Birthday cake</div>
                                    </div>
                                    <div className="special-cart">
                                        <img src="./image/recipedetail/special02.jpg"/>
                                        <div className="text-light heading_6 special-title">Party cake</div>
                                    </div>
                                </div>
                                {/*SUGGEST RECIPES*/}
                                <div className="suggest-rcp">
                                    <div className="heading_6 mb-3">Suggest Recipes</div>
                                    <div className="suggest-cart">
                                        <img src="./image/recipedetail/suggest01.jpg"/>
                                        <div className="suggest-title">
                                            <div className="small_text">Cake&Vegan</div>
                                            <div className="medium_text">Gluten-Free Tres Leches Cake</div>
                                        </div>
                                    </div>
                                    <div className="suggest-cart my-4">
                                        <img src="./image/recipedetail/suggest02.jpg"/>
                                        <div className="suggest-title">
                                            <div className="small_text">Cake&Vegan</div>
                                            <div className="medium_text">Gluten-Free Tres Leches Cake</div>
                                        </div>
                                    </div>
                                    <div className="suggest-cart">
                                        <img src="./image/recipedetail/suggest03.jpg"/>
                                        <div className="suggest-title">
                                            <div className="small_text">Cake&Vegan</div>
                                            <div className="medium_text">Gluten-Free Tres Leches Cake</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </StickyBox>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipedetail;