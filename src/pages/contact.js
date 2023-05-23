import React, { useState, useEffect } from "react";
import {faCircleMinus, faMinusCircle, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'
import Accordion from 'react-bootstrap/Accordion';

const Contact = () => {
    //tạo biến trạng thái
    //giá trị khởi tạo của open là mảng 100 phần tử giá trị là true
    const [open, setOpen] = useState(Array(10).fill(false));

    //một hàm nhận tham số là index
    const toggleSection1 = (index) => {
        //tạo bản sao mảng /
        //dùng toán tử spread "..." để tạo bản sao mảng open
        // nhưng không thay đổi mảng gốc open
        const newopen = [...open];
        newopen[index] = !newopen[index];
        setOpen(newopen);
    }

    //tạo mảng sectionContent chứa các section(mục) như subtitle...
    const sectionContent = [
        {
            subtitle: "Personal",
            heading: "Where did you learn to bake?",
            text: "I’ve taught myself! Lots of trial and error along the way, but hopefully what I share with you reduces" +
                "the amount of trial and error you have to go through.",
        },
        {
            subtitle: "Personal",
            heading: "How are you so fit and yet baking cakes all the time?! I couldn’t handle the temptation!",
            text: "I focus on balance. I love baking and eating (all types of food) but I also love feeling healthy and" +
                "strong. I never restrict anything in my eating and focus on balance, mindful eating. Being active is fun" +
                "for me. I don’t look at a workout as something I have to do, I do it because I want to. I find workouts and" +
                "activities that I enjoy and usually do them with friends. I love the workout plans from @fitmamametta and the" +
                "HIIT workout from @high.fitness. I also run, do Pilates reformer, and spin classes. Variety is key! I" +
                "wrote a post about this one time, you can find it below!",
        },
        {
            subtitle: "Personal",
            heading: "What is your favorite thing to bake?",
            text: "Cake and cookies!",
        },
    ];

    return(

        <div>
            {/*CONTACT BANNER*/}
            <div className="contact-banner">
                <div className="banner-img">
                    <img src="./image/contact/contact.jpg"/>
                </div>
                <div className="text-center contact-title">
                    <div className="heading_2 text-light">~LET'S CONNECT US~</div>
                </div>
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
                            <div className="col-2"></div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="contact-input">
                                            <div>Your name*</div>
                                            <input className="w-100" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="contact-input">
                                            <div>Email address*</div>
                                            <input className="w-100" type="email"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact-input my-5">
                                    <div>Subject</div>
                                    <input className="w-100" type="text"/>
                                </div>
                                <div className="contact-input">
                                    <div>Message</div>
                                    <textarea className="w-100" row="10"></textarea>
                                </div>
                                <div className="mt-5 contain-btn">
                                    <button type="submit" className="btn-primary">Send it</button>
                                </div>
                            </div>

                            <div className="col-2"></div>
                        </div>
                    </div>
                </div>
                {/*QUESTION HERE*/}
                <div className="question-list">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            {/*Lặp mảng sectionContent*/}
                            {sectionContent.map((section, index) => (
                            <div className="question" key={index}>
                                <div className="medium_text">{section.subtitle}</div>
                                <div className="d-flex">
                                    <div className="heading_6 mr-auto">{section.heading}</div>
                                    <FontAwesomeIcon className="icon-search" icon={faCircleMinus} onClick={() => toggleSection1(index)}/>
                                </div>
                                {/*biểu thức điều kiện xem open là true hay false*/}
                                {open[index] && (
                                    <div>
                                        Section {index + 1}: {section.text}
                                    </div>
                                )}
                                <div className="line my-4"></div>
                            </div>
                            ))}
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;