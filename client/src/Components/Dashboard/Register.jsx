import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios";

function Register() {
    const [studentDetails, setStudentDetails] = useState({
        name: "",
        dob: "",
        father: "",
        phone: "",
        gender: "",
        email: "",
        id: "",
        enrollno: "",
        faculty: "",
        department: "",
        issuedate: "",
        expirydate: "",
        addresstype: "",
        nationality: "",
        state: "",
        district: "",
        blockno: "",
        wardno: "",
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setStudentDetails((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const handleSubmit = async (event) => {
        if (Object.values(studentDetails).every(value => value.length > 0)) {
            await Axios.post("http://localhost:4500/register", studentDetails)
                .then(res => {
                    if (res.data === "Details submitted") {
                        window.location.reload(false)
                    } else {
                        toast.error("Error!", {
                            position: "top-center"
                        })
                    }
                })
        }
    }

    return (
        <reg>
            <ToastContainer />
            <div className="registration">
                <h1>Registration</h1>
                <form>
                    <div class="dash-form first">
                        <div class="details personal">
                            <span class="title">Personal Details</span>
                            <div class="fields">
                                <div class="input-field">
                                    <label>Full Name</label>
                                    <input name="name" type="text" placeholder="Enter your name" onChange={handleChange} required />
                                </div>

                                <div class="input-field">
                                    <label>Date of Birth</label>
                                    <input name="dob" type="date" placeholder="Enter birth date" onChange={handleChange} required />
                                </div>

                                <div class="input-field">
                                    <label>Father's Name</label>
                                    <input name="father" type="text" placeholder="Enter your Father's Name" onChange={handleChange} required />
                                </div>

                                <div class="input-field">
                                    <label>Mobile Number</label>
                                    <input name="phone" type="number" placeholder="Enter mobile number" onChange={handleChange} required />
                                </div>

                                <div class="input-field">
                                    <label >Gender</label>
                                    <select name="gender" onChange={handleChange} required>
                                        <option disabled selected>Select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                    {/* <input name="mob_no" type="number" placeholder="Select Gender"
                                        required /> */}
                                </div>

                                <div class="input-field">
                                    <label>Email</label>
                                    <input name="email" type="text" placeholder="Enter your Email" onChange={handleChange} required />
                                </div>
                            </div>
                        </div>

                        <div class="details ID">
                            <span class="title">Identity Details</span>

                            <div class="fields">
                                <div class="input-field">
                                    <label>Student ID</label>
                                    <input name="id" type="text" placeholder="Enter Student ID" onChange={handleChange} required />
                                </div>

                                <div class="input-field">
                                    <label>Enrollment Number</label>
                                    <input name="enrollno" type="text" placeholder="Enter Enrollment number" onChange={handleChange} required />
                                </div>

                                <div class="input-field">
                                    <label>Faculty</label>
                                    <input name="faculty" type="text" placeholder="Enter Faculty" onChange={handleChange} required />
                                </div>

                                <div class="input-field">
                                    <label>Department</label>
                                    <input name="department" type="text" placeholder="Enter Department" onChange={handleChange} required />
                                </div>

                                <div class="input-field">
                                    <label>Issued Date</label>
                                    <input name="issuedate" type="date" placeholder="Enter your issued date" onChange={handleChange} required />
                                </div>

                                <div class="input-field">
                                    <label>Expiry Date</label>
                                    <input name="expirydate" type="date" placeholder="Enter expiry date" onChange={handleChange} required />
                                </div>
                            </div>

                        </div>
                        <div class="details address">
                            <span class="title">Address Details</span>

                            <div class="fields">
                                <div class="input-field">
                                    <label>Address Type</label>
                                    <input name="addresstype" type="text" placeholder="Permanent or Temporary" onChange={handleChange} required />
                                </div>

                                <div class="input-field">
                                    <label>Nationality</label>
                                    <input name="nationality" type="text" placeholder="Enter nationality" onChange={handleChange} required />
                                </div>

                                <div class="input-field">
                                    <label>State</label>
                                    <input name="state" type="text" placeholder="Enter your state" onChange={handleChange} required />
                                </div>

                                <div class="input-field">
                                    <label>District</label>
                                    <input name="district" type="text" placeholder="Enter your district"onChange={handleChange} required />
                                </div>

                                <div class="input-field">
                                    <label>Block Number</label>
                                    <input name="blockno" type="number" placeholder="Enter block number" onChange={handleChange} required />
                                </div>

                                <div class="input-field">
                                    <label>Ward Number</label>
                                    <input name="wardno" type="number" placeholder="Enter ward number" onChange={handleChange} required />
                                </div>
                            </div>
                            <button onClick={handleSubmit} class="nextBtn">
                                <span class="btnText">Submit</span>
                                <i class="uil uil-navigator"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </reg>
    )
}

export default Register