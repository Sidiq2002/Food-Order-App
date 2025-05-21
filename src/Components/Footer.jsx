import "../Style/footer.css";
import { assets } from "../assets/assets";
export const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="logo">FOODDY</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            ratione fugiat vitae quisquam dolores sint id, nisi veniam
            repellendus. Tempore, expedita. At praesentium deserunt minima!
            Porro iste beatae maxime voluptatem?
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com">
              <img src={assets.facebook_icon} alt="facebook" />
            </a>
            <a href="https://www.twitter.com">
              <img src={assets.twitter_icon} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com">
              <img src={assets.linkedin_icon} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              {" "}
              <a href="/"> Home </a>
            </li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-123-456-7890</li>
            <li>contact@Fooddy.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © Fooddy.com</p>
    </footer>
  );
};
