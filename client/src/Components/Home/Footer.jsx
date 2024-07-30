const Footer = () => {
  var date = new Date();
  return (
    <div>
       <footer id="footer">
        <a href="https://twitter.com/jmiu_official" target='_blank' rel='noreferrer'><i class="ico fa-brands fa-twitter"></i></a>
        <a href="https://www.instagram.com/jamiamilliaislamia_official/?hl=en" target='_blank' rel='noreferrer'><i
          class="ico fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/jmiofficial/" target='_blank' rel='noreferrer'><i class="ico fa-brands fa-facebook-f"></i></a>
        <a href="mailto:gmakhdumi@jmi.ac.in" target='_blank' rel='noreferrer'><i class="ico fa-solid fa-envelope"></i></a>
        <p>© {date.getFullYear()} All Rights Reserved Jamia Millia Islamia</p>
      </footer>
    </div>
  )
}

export default Footer
