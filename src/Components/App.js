import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Images/logo2.png'
import img1 from './Images/carousel/img1.png'
import img2 from './Images/carousel/img2.png'
import img3 from './Images/carousel/img3.png'
import img4 from './Images/carousel/img4.png'
import img5 from './Images/carousel/img5.png'
import img6 from './Images/carousel/img6.png'
import img7 from './Images/carousel/img7.png'
import img8 from './Images/carousel/img8.png'
import img9 from './Images/carousel/img9.png'

function App() {
  var date = new Date();
  return (
    <div>
      {/* Navbar */}
      <section className="header">
        <nav>
          <a href="/"><img src={logo} alt="logo"></img></a>
          <h2 className="heading">JMI HOSTEL</h2>
          <div className="nav-links" id="navLinks">
            {/* <span className="icon material-symbols-outlined" onClick="hideMenu()">close</span> */}
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="mess">ABOUT</a></li>
              <li><a href="#contact">CONTACT</a></li>
              <li><a href="/StudentLogin">LOGIN</a></li>
            </ul>
          </div>
          {/* <span className="icon material-symbols-outlined" onClick="showMenu()">menu</span> */}
        </nav>
        <div className="text-box">
          <h1>Jamia Millia Islamia</h1>
          <p>Discover the Best Hostel Experience at Jamia Millia Islamia"<br></br>A Safe and Comfortable Stay</p>
          <a href="#about" className="hero-btn">Visit Us to know more</a>
        </div>
      </section>
      {/* About */}
      <div id="about">
        <h1>ABOUT</h1>
        <p class="aboutTxt">Jamia Millia Islamia ('National Islamic University') is a central university located in
          New Delhi, India. Originally established at Aligarh, United Provinces (present-day Uttar Pradesh, India)
          during the British Raj in 1920, it moved to its current location in Okhla in 1935. It was given the deemed
          status by University Grants Commission in 1962. On 26 December 1988, it became a central university.
          <br></br>
          The foundation committee of the university included Abdul Bari Firangi Mahali, Hussain Ahmad Madani,
          Muhammad Iqbal, Sanaullah Amritsari, Syed Mehmood and others. Its foundation stone was laid by Mahmud Hasan
          Deobandi, the leader of Silk Letter Movement and the first student of Darul Uloom Deoband. Ali
          Jauhar served as its first vice-chancellor from 1920 to 1923, and Hakim Ajmal Khan served as the first
          chancellor from 1920 to 1927. On 26 May 2017, Najma Heptulla became 11th Chancellor of the university, and
          Najma Akhtar became the 15th Vice Chancellor in April 2019. On 13th March 2023, Mufaddal Saifuddin was
          elected the 12th Chancellor of the university, replacing Najma Heptulla.
          <br></br>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.0769347724772!2d77.28157174748547!3d28.565141896773145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38bc0a324fd%3A0x400656f511447dbe!2sDr%20BR%20Ambedkar%20Hostel!5e0!3m2!1sen!2sin!4v1679332315373!5m2!1sen!2sin"
            title='myFrame' width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          In 2020, Jamia Millia Islamia was ranked 1st among all central universities in the country in rankings
          released by Ministry of Education of India. In December 2021, the university received an 'A++' ranking by
          National Assessment and Accreditation Council.
          <br></br>
          Jamia Millia Islamia was established in Aligarh on 29 October 1920 by Mohammad Ali Jauhar, Hakim Ajmal Khan,
          Mukhtar Ahmed Ansari, Abdul Majeed Khwaja, and Zakir Hussain under the presidency of Mahmud Hasan Deobandi.
          It was established mainly in response to the demand of some students of the Aligarh Muslim University for a
          new National Muslim University which would be free from government influence as they felt that the
          administration of Aligarh Muslim University was of pro-British stance.
          <br></br>
          It was conceived as a national institution that would offer progressive education and an emphasis on Indian
          nationalism to students from all communities, particularly Muslims. Zakir Hussain described "the movement of
          Jamia Millia Islamia as a struggle for education and cultural renaissance that aims to prepare a blueprint
          for Indian Muslims which may focus on Islam but simultaneously evolve a national culture for common Indian.
          It will lay the foundation of the thinking that true religious education will promote patriotism and
          national integration among Indian Muslims, who will be proud to take part in the future progress of India,
          which will play its part in the comity of nations for peace and development. The objective of establishment
          of Jamia Millia Islamia will be to lay down the common curriculum for Indian Muslims taking into account the
          future challenges and will prepare the children to be masters of future" The emergence of Jamia was
          supported by Mahatma Gandhi, who felt that Jamia Millia Islamia could shape lives of hundreds and thousands
          of students on the basis of a shared culture and worldview.
          <br></br>
          In 1925, Jamia Millia Islamia moved from Aligarh to Karol Bagh, New Delhi. On 1 March 1935, the foundation
          stone for a school building was laid at Okhla, then a nondescript village in the southern outskirts of
          Delhi. In 1936, all institutions of Jamia Millia Islamia except Jamia Press, the Maktaba, and the library
          moved to the new campus.
        </p>
      </div>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img style={{ height: '90vh' }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '90vh' }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '90vh' }}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '90vh' }}
            className="d-block w-100"
            src={img4}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '90vh' }}
            className="d-block w-100"
            src={img5}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '90vh' }}
            className="d-block w-100"
            src={img6}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '90vh' }}
            className="d-block w-100"
            src={img7}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '90vh' }}
            className="d-block w-100"
            src={img8}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '90vh' }}
            className="d-block w-100"
            src={img9}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* contact */}
      <div id="contact">
        <h1>Contact Information</h1>
        <div class="contact-text">
          <p> Hall of Boys Residence (Campus B), Gate No-4, Jamia Millia Islamia</p>
          <p>Jamia Nagar, New Delhi-110025</p>
          <p>Phone: +91(11) 26981717, 26984617, 26984658</p>
          <p>Fax : +91(11) 2698 0229</p>
        </div>
      </div>

      {/* footer */}
      <footer id="footer">
        <a href="https://twitter.com/jmiu_official" target='_blank' rel='noreferrer'><i class="ico fa-brands fa-twitter"></i></a>
        <a href="https://www.instagram.com/jamiamilliaislamia_official/?hl=en" target='_blank' rel='noreferrer'><i
          class="ico fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/jmiofficial/" target='_blank' rel='noreferrer'><i class="ico fa-brands fa-facebook-f"></i></a>
        <a href="mailto:gmakhdumi@jmi.ac.in" target='_blank' rel='noreferrer'><i class="ico fa-solid fa-envelope"></i></a>
        <p>© {date.getFullYear()} All Rights Reserved Jamia Millia Islamia</p>
      </footer>
    </div>
  );
}

export default App;
