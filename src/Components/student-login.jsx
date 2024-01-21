import logo from "./Images/logo3.png"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function StudentLogin() {
    const [signupSection, setSignupSection] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="student-login-page">
            {/* navbar */}
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
                        <input type="email" placeholder="Enter Email" required />
                        <p>Password</p>
                        <input type="password" placeholder="Enter Password" required />
                        <p>Confirm Password</p>
                        <input type="password" placeholder="Confirm Password" required />
                        <input type="submit" name="submit" value="Sign Up" />
                        <m class="mssg">Already registered? <m onClick={() => { setSignupSection(false) }} >Login</m></m>
                    </form>
                    ) : (
                    <form>
                        <h3>Student Account</h3>
                        <p>Email</p>
                        <input type="email" placeholder="Enter Email" required />
                        <p>Password</p>
                        <input type="password" placeholder="Enter Password" required />
                        <input onClick={() => { navigate("/Dashboard") }} type="submit" name="submit" value="Login" />
                        <m class="mssg">Not registered? <m onClick={() => { setSignupSection(true) }} >Create an account</m></m>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StudentLogin;