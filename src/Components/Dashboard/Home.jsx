// import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Home() {
    return (
        <reg>
            <div className="registration">
                <h1>Registration</h1>
                <form>
                    <div class="dash-form first">
                        <div class="details personal">
                            <span class="title">Personal Details</span>
                            <div class="fields">
                                <div class="input-field">
                                    <label>Full Name</label>
                                    <input name="stud_name" type="text" placeholder="Enter your name" required />
                                </div>

                                <div class="input-field">
                                    <label>Date of Birth</label>
                                    <input name="dob" type="date" placeholder="Enter birth date" required />
                                </div>

                                <div class="input-field">
                                    <label>Father's Name</label>
                                    <input name="father_name" type="text" placeholder="Enter your Father's Name"
                                        required />
                                </div>

                                <div class="input-field">
                                    <label>Mobile Number</label>
                                    <input name="mob_no" type="number" placeholder="Enter mobile number"
                                        required />
                                </div>

                                <div class="input-field">
                                    <label>Gender</label>
                                    {/* <select required name="gen">
                                        <option disabled selected>Select gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select> */}
                                    <input name="mob_no" type="number" placeholder="Enter mobile number"
                                        required />
                                </div>

                                <div class="input-field">
                                    <label>Email</label>
                                    <input name="email" type="text" placeholder="Enter your Email" required />
                                </div>
                            </div>
                        </div>

                        <div class="details ID">
                            <span class="title">Identity Details</span>

                            <div class="fields">
                                <div class="input-field">
                                    <label>Student ID</label>
                                    <input name="id_type" type="text" placeholder="Enter Student ID" required />
                                </div>

                                <div class="input-field">
                                    <label>Enrollment Number</label>
                                    <input name="id_no" type="text" placeholder="Enter Enrollment number" required />
                                </div>

                                <div class="input-field">
                                    <label>Faculty</label>
                                    <input name="faculty" type="text" placeholder="Enter Faculty" required />
                                </div>

                                <div class="input-field">
                                    <label>Department</label>
                                    <input name="dept" type="text" placeholder="Enter Department" required />
                                </div>

                                <div class="input-field">
                                    <label>Issued Date</label>
                                    <input name="issuse" type="date" placeholder="Enter your issued date"
                                        required />
                                </div>

                                <div class="input-field">
                                    <label>Expiry Date</label>
                                    <input name="expiry" type="date" placeholder="Enter expiry date" required />
                                </div>
                            </div>

                        </div>
                        <div class="details address">
                            <span class="title">Address Details</span>

                            <div class="fields">
                                <div class="input-field">
                                    <label>Address Type</label>
                                    <input name="add_type" type="text" placeholder="Permanent or Temporary"
                                        required />
                                </div>

                                <div class="input-field">
                                    <label>Nationality</label>
                                    <input name="nationality" type="text" placeholder="Enter nationality"
                                        required />
                                </div>

                                <div class="input-field">
                                    <label>State</label>
                                    <input name="state" type="text" placeholder="Enter your state" required />
                                </div>

                                <div class="input-field">
                                    <label>District</label>
                                    <input name="district" type="text" placeholder="Enter your district"
                                        required />
                                </div>

                                <div class="input-field">
                                    <label>Block Number</label>
                                    <input name="blockno" type="number" placeholder="Enter block number"
                                        required />
                                </div>

                                <div class="input-field">
                                    <label>Ward Number</label>
                                    <input name="ward" type="number" placeholder="Enter ward number" required />
                                </div>
                            </div>
                            <button class="nextBtn">
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

export default Home