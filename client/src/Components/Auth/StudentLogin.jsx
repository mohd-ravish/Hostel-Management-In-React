import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { handleSignupSubmit, handleLoginSubmit } from '../../ApiHandler/authFunctions'

function StudentLogin() {
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

    const navigate = useNavigate();

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

    return (
        <div>
            <ToastContainer />
            <div class="form">
                {signupSection ? (
                    <form action="" onSubmit={(e) => handleSignupSubmit(e, studentSignupData, setSignupSection, setStudentSignupData)}>
                        <h3>Student Account</h3>
                        <p>Email</p>
                        <input name="email" type="email" value={studentSignupData.email} placeholder="Enter Email" onChange={handleSignupChange} autoComplete="off" required />
                        <p>Password</p>
                        <input name="password" type="password" value={studentSignupData.password} placeholder="Enter Password" onChange={handleSignupChange} autoComplete="off" required />
                        <p>Confirm Password</p>
                        <input name="confirmPassword" type="password" value={studentSignupData.confirmPassword} placeholder="Confirm Password" onChange={handleSignupChange} autoComplete="off" required />
                        <input type="submit" />
                        <m class="mssg">Already registered? <m onClick={() => { setSignupSection(false) }} >Login</m></m>
                    </form>
                ) : (
                    <form action="" onSubmit={(e) => handleLoginSubmit(e, studentLoginData, setStudentLoginData, navigate)}>
                        <h3>Student Account</h3>
                        <p>Email</p>
                        <input name="email" type="email" value={studentLoginData.email} placeholder="Enter Email" onChange={handleLoginChange} autoComplete="off" required />
                        <p>Password</p>
                        <input name="password" type="password" value={studentLoginData.password} placeholder="Enter Password" onChange={handleLoginChange} autoComplete="off" required />
                        <input type="submit" />
                        <m class="mssg">Not registered? <m onClick={() => { setSignupSection(true) }} >Create an account</m></m>
                    </form>
                )}
            </div>
        </div>
    );
}

export default StudentLogin;