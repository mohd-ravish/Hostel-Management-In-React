import logo from "./Images/logo2.png"

function Header() {
    return (
        <div class="about-header nav-bg">
            <nav class="navbar navbar-expand-lg" id="about-navbar">
                <div class="container-fluid">
                    <a href="/"><img class="about-logo" src={logo} alt="logo"></img></a>
                    <h3 class="about-heading">JMI HOSTEL</h3>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class=" nav-item">
                                <a class="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li class=" nav-item">
                                <a class="nav-link" aria-current="page" href="/Mess">Mess</a>
                            </li>
                            <li class=" nav-item">
                                <a class="nav-link" aria-current="page" href="/Fee">Fee Structure</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Rules">Rules & Regulations</a>
                            </li>
                            <li class=" nav-item">
                                <form id="form-id" action="chat" method="POST">
                                    <a class="nav-link" aria-current="page" href="chats"
                                        onclick="document.getElementById('form-id').submit()">Chats</a>
                                </form>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/StudentLogin">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;