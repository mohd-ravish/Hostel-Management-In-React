import { useState } from 'react';
import logo from "../Images/logo3.png"
import StudentLogin from "./StudentLogin";
import AdminLogin from "./AdminLogin";

const Auth = () => {
    const [activeComponent, setActiveComponent] = useState("StudentLogin");

    const renderComponent = () => {
        switch (activeComponent) {
            case "StudentLogin":
                return <StudentLogin />;
            case "AdminLogin":
                return <AdminLogin />;
            default:
                return <StudentLogin />;
        }
    };

    return (
        <div className="student-login-page">
            <div className="nav-bg">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <img className="navbar-brand logo" src={logo} alt=""></img>
                        <h3 className="heading">JMI HOSTEL</h3>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="navTxt nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    {activeComponent === 'AdminLogin' ? (
                                        <a className="navTxt nav-link" aria-current="page" href="# " onClick={() => setActiveComponent("StudentLogin")}>Student</a>
                                    ) : (
                                        <a className="navTxt nav-link" aria-current="page" href="# " onClick={() => setActiveComponent("AdminLogin")}>Admin</a>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {renderComponent()}
        </div>
    );
}

export default Auth;