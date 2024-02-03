import logo from "./Images/logo3.png"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios";

function StudentLogin() {
    const navigate = useNavigate();
    const [signupSection, setSignupSection] = useState(false);
    const [studentSignupData, setStudentSignupData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [studentLoginData, setStudentLoginData] = useState({
        email: "",
        password: "",
    })

    const handleSignupChange = (e) => {
        const { value, name } = e.target
        setStudentSignupData((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const handleLoginChange = (e) => {
        const { value, name } = e.target
        setStudentLoginData((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        if (Object.values(studentSignupData).every(value => value.length > 0)) {
            await Axios.post("https://jmi-hostel-management-server.onrender.com/signup", studentSignupData)
                .then(res => {
                    if (res.data === "User registered") {
                        toast.success("User registered!", {
                            position: "top-center"
                        })
                        setSignupSection(false)
                        setStudentSignupData({
                            email: "",
                            password: "",
                            confirmPassword: "",
                        })
                    }
                    else if (res.data === "Password and confirm password do not match") {
                        toast.error("Password and confirm password do not match!", {
                            position: "top-center"
                        })
                        setStudentSignupData({
                            email: "",
                            password: "",
                            confirmPassword: "",
                        })
                    } else {
                        toast.error("Email already in use!", {
                            position: "top-center"
                        })
                        setStudentSignupData({
                            email: "",
                            password: "",
                            confirmPassword: "",
                        })
                    }
                })
        }
    }

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        if (Object.values(studentLoginData).every(value => value.length > 0)) {
            await Axios.post("https://jmi-hostel-management-server.onrender.com/login", studentLoginData)
                .then(res => {
                    if (res.data === "User not found") {
                        toast.error("User not found!", {
                            position: "top-center"
                        })
                        setStudentLoginData({
                            email: "",
                            password: "",
                        })
                    }
                    else if (res.data === "Incorrect password") {
                        toast.error("Incorrect password!", {
                            position: "top-center"
                        })
                        setStudentLoginData({
                            email: "",
                            password: "",
                        })
                    }
                    else {
                        // toast.success("Successfully LoggedIn!", {
                        //     position: "top-center"
                        // })
                        // setStudentLoginData({
                        //     email: "",
                        //     password: "",
                        // })
                        navigate("/Dashboard");
                    }
                })
        }
    }

    return (
        <div className="student-login-page">
            {/* navbar */}
            <ToastContainer />
            <div class="nav-bg">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <img class="navbar-brand logo" src={logo} alt=""></img>
                        <h3 class="heading">JMI HOSTEL</h3>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto">
                                <li class=" nav-item">
                                    <a class="navTxt nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li class=" nav-item">
                                    <a class="navTxt nav-link" aria-current="page" href="AdminLogin">Admin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Form */}
            <div>
                <div class="form">
                    {signupSection ? (
                        <form>
                            <h3>Student Account</h3>
                            <p>Email</p>
                            <input name="email" type="email" value={studentSignupData.email} placeholder="Enter Email" onChange={handleSignupChange} autoComplete="off" required />
                            <p>Password</p>
                            <input name="password" type="password" value={studentSignupData.password} placeholder="Enter Password" onChange={handleSignupChange} autoComplete="off" required />
                            <p>Confirm Password</p>
                            <input name="confirmPassword" type="password" value={studentSignupData.confirmPassword} placeholder="Confirm Password" onChange={handleSignupChange} autoComplete="off" required />
                            <input type="submit" onClick={handleSignupSubmit} />
                            <m class="mssg">Already registered? <m onClick={() => { setSignupSection(false) }} >Login</m></m>
                        </form>
                    ) : (
                        <form>
                            <h3>Student Account</h3>
                            <p>Email</p>
                            <input name="email" type="email" value={studentLoginData.email} placeholder="Enter Email" onChange={handleLoginChange} autoComplete="off" required />
                            <p>Password</p>
                            <input name="password" type="password" value={studentLoginData.password} placeholder="Enter Password" onChange={handleLoginChange} autoComplete="off" required />
                            <input type="submit" onClick={handleLoginSubmit} />
                            <m class="mssg">Not registered? <m onClick={() => { setSignupSection(true) }} >Create an account</m></m>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StudentLogin;