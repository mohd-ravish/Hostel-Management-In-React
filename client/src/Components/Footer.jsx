function Footer(){
  var date = new Date();
    return(
        <footer>
        <div class="footer-container">
          <div>
            <h6>Campus A</h6>
            <div>New Boys</div>
            <div>Allamah Iqbal</div>
            <div>Kellat</div>
  
          </div>
          <div>
            <h6>Campus B</h6>
            <div>Ambedkar</div>
            <div>FRK</div>
            <div>Khwaja</div>
          </div>
        </div>
        <p>© {date.getFullYear()} All Rights Reserved Jamia Millia Islamia</p>
      </footer>
    );
}

export default Footer;