import logo from "./Images/logo3.png"

function AdminLogin() {

    return (
        <div className="admin-login-page">
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
                                    <a class="navTxt nav-link" aria-current="page" href="StudentLogin">Student</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Form */}
            <div class="form">
                <h3>Admin Account</h3>
                <form className="mssg">
                    <p>Email</p>
                    <input type="email" placeholder="Enter Email" required />
                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" required />
                    <input type="submit" name="submit" value="Login" />
                    <m>Forgotten your password?</m><br></br>
                    <m>Don't have an account?</m>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;