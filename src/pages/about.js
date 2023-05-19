import React from "react";

const About = () => {
    return (
        <div>
            {/*BANNER HERE*/}
            <div className="banner">
                <div className="banner-inner text-center text-light">
                    <div className="heading_2 banner-hi">~Hi There~</div>
                    <div className="heading_5">Welcome To Our Dream Place</div>
                </div>
            </div>
            <div className="container-fluid">
                {/*DEAR*/}
                <div className="dear">
                    <div className="row dear-top">
                        <div className="col"></div>
                        <div className="col-3"></div>
                        <div className="dear-glad col-8 heading_4">
                            Glad To See You Here
                        </div>
                    </div>
                    <div className="row dear-bottom">
                        <div className="col"></div>
                        <div className="dear-info col-3">
                            <div className="from pri d-flex from-to">
                                <div className="span small_text">From:</div>
                                <div className="small_text">TFSC Team</div>
                            </div>
                            <div className="to pri d-flex from-to">
                                <div className="span small_text">To:</div>
                                <div className="small_text">Foodlovers all over the world</div>
                            </div>
                        </div>
                        <div className="dear-content col-8">
                            <div className="dear-flv medium_text">Dear Foodlovers</div>
                            <div className="dear-ct-n1">Every person is unique, and why shouldn't their cake be? CAKE
                                LOVERS
                                are here to bake your uniqueness into reality with beautiful designs and exceptional
                                taste
                                that leaves your mouth watering🤤 and yawning for more. If you want a taste of our
                                spectacular
                                full flavoured cakes for special occasions, Visit us NOW!!!
                            </div>
                            <div>The Five-Season Cake is a community of bakers and cake lovers. If you’re looking for
                                beautiful cake
                                inspiration, projects, tutorials and recipes -- you’ve come to the right place. Find
                                cake
                                recipes, DIY projects, tutorials and inspiration for both beginners and advanced
                                bakers.</div>
                        </div>
                    </div>
                </div>
                {/*WHO WE ARE*/}
                <div className="row who">
                    <div className="col-6 who-left">
                        <img src="./image/about/who1.jpg"/>
                    </div>
                    <div className="col-8 who-right row">
                        <div className="col-6 who-img2">
                            <img src="./image/about/who2.png"/>
                        </div>
                        <div className="col-6 who-content">
                            <span className="pri medium_text">About Our Blog</span>
                            <div className="who-title heading_4">Who We Are</div>
                            <div className="pg1">We're 4 girls, Founders of The Five-Season Cake blog, a baking website
                                celebrating cake
                                since 2022.</div>
                            <div> We long ago ditched box mixes in pursuit of melt-in-your-mouth, to-die-for flavor
                                combinations, fillings and textures. We believe cake must be decadent, life-changing and
                                worthy
                                of celebration!</div>
                        </div>
                    </div>
                </div>
                {/*WHAT WE DO*/}
                <div className="row what">
                    <div className="col-3 what-down">
                        <div className="intro">
                            <div className="heading_4 main-title">What We Do</div>
                            <div>The Five-Season Cake is a community of bakers, cake makers, and friends sharing
                                everything
                                and anything you’ve ever wanted to know about cake.</div>
                        </div>
                    </div>
                    <div className="col-3 what-up">
                        <div className="cart-intro">
                            <img src="./image/about/what01.png"/>
                            <div className="pri heading_6 sub-title">Making Our Dream</div>
                            <div className="small_text">“The surest way to make your dreams come true is to live them.” “Dreams
                                don't work
                                unless you take action.”</div>
                        </div>
                    </div>
                    <div className="col-3 what-down down-cart">
                        <div className="cart-intro">
                            <img src="./image/about/what02.jpg"/>
                            <div className="pri heading_6 sub-title">Share Passion And Happiness</div>
                            <div className="small_text">Passion is the driving force behind success and happiness that
                                pushes you to reach your highest potential.</div>
                        </div>
                    </div>
                    <div className="col-3 what-up">
                        <div className="cart-intro">
                            <img src="./image/about/what03.jpg"/>
                            <div className="pri heading_6 sub-title">Connect Foodlovers</div>
                            <div className="small_text">"Sharing food with another human is an intimate act that should not be
                                indulged
                                in lightly." ― M.F.K. Fisher</div>
                        </div>
                    </div>
                </div>
                {/*GALLERY HERE*/}
                <div className="gallery">
                    <div className="text-center row gallery-inner">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="heading_4 gallery-title">Our Cake Design Inspiration</div>
                            <div className="small_text">Cake design inspiration can be found anywhere! Once you begin decorating cakes
                                you'll start looking at
                                the world in a different way - what would normally be just a magazine advertisement for perfume,
                                has now become the color palate for your next cake!</div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="gallery-img row">
                        <div className="list-box col-4">
                            <img src="./image/about/gallery01.jpg"/>
                        </div>
                        <div className="list-box col-4">
                            <div className="gallery-top">
                                <img src="./image/about/gallery02.jpg"/>
                            </div>
                            <div className="list-box">
                                <img src="./image/about/gallery03.jpg"/>
                            </div>
                        </div>
                        <div className="list-box col-4">
                            <img src="./image/about/gallery04.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;