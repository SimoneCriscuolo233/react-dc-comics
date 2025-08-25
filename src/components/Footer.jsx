const Footer = () => {
  return (
    <footer className="footer">
      <div className="container pt-50">

        <div className="footer-top">
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="t-white">DC COMICS</h4>
              <ul>
                <li><a href="#">Characters</a></li>
                <li><a href="#">Comics</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">News</a></li>
              </ul>
              <h4 className="t-white">SHOP</h4>
              <ul>
                <li><a href="#">Shop DC</a></li>
                <li><a href="#">Shop DC Collectibles</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="t-white">DC</h4>
              <ul>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">Privacy policy (New)</a></li>
                <li><a href="#">Ad Choices</a></li>
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Subscriptions</a></li>
                <li><a href="#">Talent Workshops</a></li>
                <li><a href="#">CPSC Certificates</a></li>
                <li><a href="#">Ratings</a></li>
                <li><a href="#">Shop Help</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="t-white">SITES</h4>
              <ul>
                <li><a href="#">DC</a></li>
                <li><a href="#">MAD Magazine</a></li>
                <li><a href="#">DC Kids</a></li>
                <li><a href="#">DC Universe</a></li>
                <li><a href="#">DC Power Visa</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <img src="/img/dc-logo-bg.png" alt="DC Logo" className="footer-logo" />
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom container-fluid">
        <button className="signup-btn">SIGN-UP NOW!</button>
        <div className="socials">
          <span className="t-blue">FOLLOW US</span>
          <div className="social-icons">
            <img src="/img/footer-facebook.png" alt="Facebook" />
            <img src="/img/footer-twitter.png" alt="Facebook" />
            <img src="/img/footer-youtube.png" alt="Facebook" />
            <img src="/img/footer-pinterest.png" alt="Facebook" />
            <img src="/img/footer-periscope.png" alt="Facebook" />
          </div>
        </div>
      </div>
    </footer>
  );
}



export default Footer
