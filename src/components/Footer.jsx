const Footer = ({ footerLists }) => {
  return (
    <footer className="footer">
      <div className="container py-50">
        <div className="row">
          <div className="col-50 d-flex">
            <div className="col-33">

              {footerLists.slice(0, 2).map((section) => {
                const { id, title, list } = section
                return (
                  <div key={id}>
                    <h4 className="t-white">{title}</h4>
                    <ul>
                      {list.map((item) => {
                        const { id, href, label } = item
                        return (
                          <li key={id}>
                            <a href={href}>{label}</a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>

            <div className="col-33 d-flex">
              {footerLists.slice(2).map((section) => {
                const { id, title, list } = section
                return (
                  <div key={id} className="col-50 ms-20">
                    <h4 className="t-white">{title}</h4>
                    <ul>
                      {list.map((item) => {
                        const { id, href, label } = item
                        return (
                          <li key={id}>
                            <a href={href}>{label}</a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>

          </div>

          <div className="col-50">
            <img src="/img/dc-logo-bg.png" alt="DC Logo" className="footer-logo" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-between">
            <div className="col-25">
              <button className="signup-btn">SIGN-UP NOW!</button>
            </div>

            <div className="col-75">
              <div className="socials">
                <span className="t-blue">FOLLOW US</span>
                <div className="social-icons">
                  <img src="/img/footer-facebook.png" alt="Facebook" />
                  <img src="/img/footer-twitter.png" alt="Twitter" />
                  <img src="/img/footer-youtube.png" alt="YouTube" />
                  <img src="/img/footer-pinterest.png" alt="Pinterest" />
                  <img src="/img/footer-periscope.png" alt="Periscope" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer
