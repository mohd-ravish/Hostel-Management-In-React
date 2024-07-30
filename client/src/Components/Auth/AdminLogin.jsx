import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminLogin() {
    return (
        <div>
            <ToastContainer />
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