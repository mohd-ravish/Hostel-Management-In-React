import Axios from "axios";
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL;

// Function to signup
export const handleSignupSubmit = async (e, studentSignupData, setSignupSection, setStudentSignupData) => {
    e.preventDefault();
    if (Object.values(studentSignupData).every(value => value.length > 0)) {
        await Axios.post(`${API_URL}/auth/signup`, studentSignupData)
            .then(response => {
                if (response.data.status === "success") {
                    toast.success(response.data.message, {
                        position: "top-center"
                    })
                    setSignupSection(false)
                    setStudentSignupData({
                        email: "",
                        password: "",
                        confirmPassword: "",
                    })
                }
                else if (response.data.status === "password error") {
                    toast.error(response.data.message, {
                        position: "top-center"
                    })
                    setStudentSignupData({
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

// Function to login
export const handleLoginSubmit = async (e, studentLoginData, setStudentLoginData, navigate) => {
    e.preventDefault();
    if (Object.values(studentLoginData).every(value => value.length > 0)) {
        await Axios.post(`${API_URL}/auth/login`, studentLoginData)
            .then(response => {
                if (response.data.status === "user not found") {
                    toast.error(response.data.message, {
                        position: "top-center"
                    })
                    setStudentLoginData({
                        email: "",
                        password: "",
                    })
                }
                else if (response.data.status === "success") {
                    localStorage.setItem("token", response.data.data);
                    navigate("/Dashboard");
                } else {
                    toast.error("Incorrect password!", {
                        position: "top-center"
                    })
                    setStudentLoginData({
                        email: "",
                        password: "",
                    })
                }
            })
    }
}

// Function to verify user
export const verifyUser = async (setAuth, setUsername, setMessage) => {
    const option = {
        method: 'get',
        url: `${API_URL}/auth/verifyUser`,
        headers: {
            Authorization: localStorage.getItem("token")
        }
    };
    Axios(option)
        .then(res => {
            if (res.data.status === "success") {
                setAuth(true)
                setUsername(res.data.data)
            } else {
                setAuth(false)
                setMessage(res.data.error)
            }
        })
        .then(err => console.log(err));
}