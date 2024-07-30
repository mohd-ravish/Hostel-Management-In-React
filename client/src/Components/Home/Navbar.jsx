import logo from '../Images/logo2.png'

const Navbar = () => {
  return (
    <div>
       <section className="header">
        <div class="nav-bg">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <img class="navbar-brand logo" src={logo} alt=""></img>
              <h2 class="main-heading">JMI HOSTEL</h2>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="nav-links collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="navTxt nav-link" aria-current="page" href="/">HOME</a>
                  </li>
                  <li class="nav-item">
                    <a class="navTxt nav-link" aria-current="page" href="/about">ABOUT</a>
                  </li>
                  <li class="nav-item">
                    <a class="navTxt nav-link" aria-current="page" href="#contact">CONTACT</a>
                  </li>
                  <li class="nav-item">
                    <a class="navTxt nav-link" aria-current="page" href="/auth">LOGIN</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="text-box">
          <h1>Jamia Millia Islamia</h1>
          <p>Discover the Best Hostel Experience at Jamia Millia Islamia"<br></br>A Safe and Comfortable Stay</p>
          <a href="#about" className="hero-btn">Visit Us to know more</a>
        </div>
      </section>
    </div>
  )
}

export default Navbar
