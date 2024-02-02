function Complain() {
    return (
        <complain>
            <div class="Complaint">
                <div class="contain">
                    <h1 class="title">Complaint Form</h1>
                    <form>
                        <div class="inputBox">
                            <label>First Name</label>
                            <input type="text" id="compfname" name="firstname" placeholder="Enter first name" />
                        </div>

                        <div class="inputBox">
                            <label>Last Name</label>
                            <input type="text" id="complname" name="lastname" placeholder="Enter last name" />
                        </div>

                        <div class="inputBox">
                            <label>Email</label>
                            <input type="email" id="compemail" name="email" placeholder="Enter email" required />
                        </div>

                        <div class="inputBox">
                            <label>Subject</label>
                            <input type="text" id="compsubject" name="subject" placeholder="Subject of complaint"
                                required />
                        </div>

                        <div class="inputBox">
                            <label>Complaint</label>
                            <textarea rows="8" id="complaint" name="complaint" placeholder="Enter your complaint ..."
                                required></textarea>
                        </div>
                        {/* <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="http://localhost:4500" /> */}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </complain>
    )
}

export default Complain