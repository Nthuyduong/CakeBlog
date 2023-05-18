import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({children}) => {
    return (
        <div className="">
            <Header />
            <div className={`page-body-wrapper`}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;