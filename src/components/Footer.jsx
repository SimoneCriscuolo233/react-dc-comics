const footerLists = [
  {
    id: 1,
    title: "DC Comics",
    list: [
      { id: 1, href: "#", label: "Characters" },
      { id: 2, href: "#", label: "Comics" },
      { id: 3, href: "#", label: "Movies" },
      { id: 4, href: "#", label: "TV" },
      { id: 5, href: "#", label: "Games" },
      { id: 6, href: "#", label: "Videos" },
      { id: 7, href: "#", label: "News" }
    ]
  },
  {
    id: 2,
    title: "Shop",
    list: [
      { id: 1, href: "#", label: "Shop DC" },
      { id: 2, href: "#", label: "Shop DC Collectibles" }
    ]
  },
  {
    id: 3,
    title: "DC",
    list: [
      { id: 1, href: "#", label: "Terms Of Use" },
      { id: 2, href: "#", label: "Privacy Policy (New)" },
      { id: 3, href: "#", label: "Ad Choices" },
      { id: 4, href: "#", label: "Advertising" },
      { id: 5, href: "#", label: "Jobs" },
      { id: 6, href: "#", label: "Subscriptions" },
      { id: 7, href: "#", label: "Talent Workshops" },
      { id: 8, href: "#", label: "CPSC Certificates" },
      { id: 9, href: "#", label: "Ratings" },
      { id: 10, href: "#", label: "Shop Help" },
      { id: 11, href: "#", label: "Contact Us" }
    ]
  },
  {
    id: 4,
    title: "Sites",
    list: [
      { id: 1, href: "#", label: "DC" },
      { id: 2, href: "#", label: "MAD Magazine" },
      { id: 3, href: "#", label: "DC Kids" },
      { id: 4, href: "#", label: "DC Universe" },
      { id: 5, href: "#", label: "DC Power Visa" }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-50">
        <div className="row">
          <div className="col-50 d-flex">
            <div className="col-33">
              {footerLists.slice(0, 2).map((section) => (
                <div key={section.id}>
                  <h4 className="t-white">{section.title}</h4>
                  <ul>
                    {section.list.map((item) => (
                      <li key={item.id}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="col-33 d-flex">
              {footerLists.slice(2).map((section) => (
                <div key={section.id} className="col-50 ms-20">
                  <h4 className="t-white">{section.title}</h4>
                  <ul>
                    {section.list.map((item) => (
                      <li key={item.id}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
