import React, { useState } from "react";
import logo from "../Images/logo2.png";
import Fee from "./Fee";
import Mess from "./Mess";
import Rules from "./Rules";
import Chats from "./Chats";

function About() {
    const [activeComponent, setActiveComponent] = useState("Rules");

    const renderComponent = () => {
        switch (activeComponent) {
            case "Fee":
                return <Fee />;
            case "Mess":
                return <Mess />;
            case "Rules":
                return <Rules />;
            case "Chats":
                return <Chats />;
            default:
                return <Rules />;
        }
    };

    return (
        <>
            <div className="about-header nav-bg">
                <nav className="navbar navbar-expand-lg" id="about-navbar">
                    <div className="container-fluid">
                        <a href="# " onClick={() => setActiveComponent("Home")}><img className="about-logo" src={logo} alt="logo"></img></a>
                        <h3 className="about-heading">JMI HOSTEL</h3>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# " onClick={() => setActiveComponent("Fee")}>Fee Structure</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# " onClick={() => setActiveComponent("Mess")}>Mess</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# " onClick={() => setActiveComponent("Rules")}>Rules & Regulations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="# " onClick={() => setActiveComponent("Chats")}>Chats</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/auth">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
                {renderComponent()}
            </div>
        </>
    );
}

export default About;