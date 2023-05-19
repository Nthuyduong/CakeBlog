import React from "react";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Contact = () => {
    return(
        <div>
            {/*CONTACT BANNER*/}
            <div className="contact-banner">
                <div className="banner-img">
                    <img src="./image/contact/contact.jpg"/>
                </div>
                <div className="heading_2 contact-title">Let's Connect Us</div>
            </div>
            <div className="container-fluid">
                {/*Q&A*/}
                <div className="QA">
                    <div className="heading_5 text-center mb-5">WHAT DO YOU HAVE A QUESTION ABOUT?</div>
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
                    <div className="QA-title">
                        <div className="d-flex all-choose mb-4">
                            <div className="QA-choose">View all</div>
                            <div className="QA-choose mx-4">Equipments & Supplies</div>
                            <div className="QA-choose">Storing & Preserving</div>
                            <div className="QA-choose mx-4">Baking</div>
                            <div className="QA-choose">Misc</div>
                        </div>
                        <div className="d-flex all-choose">
                            <div className="QA-choose">Decorating & Assembling</div>
                            <div className="QA-choose mx-4">Ingredients</div>
                            <div className="QA-choose">Equipment and Supplies</div>
                            <div className="QA-choose mx-4">Frosting</div>
                            <div className="QA-choose">Personal</div>
                        </div>
                    </div>
                </div>
                {/*ASK A NEW QUESTION AND CONTACT*/}
                <div className="contact">
                    <div className="heading_5 text-center mb-5">HAVE A QUESTION YOU DON'T SEE BELOW?</div>
                    <div className="contact-form">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-6">
                                <div classname="contact-name">
                                    <label>Your name</label>
                                    <input/>
                                </div>
                                <div className="contact-name">
                                    <label>Email address</label>
                                    <input/>
                                </div>
                                <div className="contact-name">
                                    <label>Subject</label>
                                    <input/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="medium_text">Contact and Q&A</div>
                                <div className="heading_5">I Would Love To Hear From You</div>
                                <div>
                                    Enter your information and we will contact to you as soon as impossible. Please usually check your phone and email.
                                </div>
                                <div>Thefiveseasonscake@gmail.com</div>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
                {/*QUESTION HERE*/}
                <div className="question-list">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="question">
                                <div className="medium_text">Baking</div>
                                <div className="heading_6">HAVE A QUESTION YOU DON'T SEE BELOW?</div>
                                <div>
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat
                                    quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed
                                    est sit in tortor. Blandit consequat quisque vitae.
                                </div>
                            </div>
                            <div className="line my-4"></div>
                            <div className="question">
                                <div className="medium_text">Personal</div>
                                <div className="heading_6">HAVE A QUESTION YOU DON'T SEE BELOW?</div>
                                <div>
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat
                                    quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed
                                    est sit in tortor. Blandit consequat quisque vitae.
                                </div>
                            </div>
                            <div className="line my-4"></div>
                            <div className="question">
                                <div className="medium_text">Frosting</div>
                                <div className="heading_6">HAVE A QUESTION YOU DON'T SEE BELOW?</div>
                                <div>
                                    Tempus, tristique morbi scelerisque sed. Diam nec ut sed est sit in tortor. Blandit consequat
                                    quisque vitae ornare diam netus tellus. Tempus, tristique morbi scelerisque sed. Diam nec ut sed
                                    est sit in tortor. Blandit consequat quisque vitae.
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;