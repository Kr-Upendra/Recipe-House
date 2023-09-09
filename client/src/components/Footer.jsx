import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterHeading />
      <div className="footer__ctnr">
        <div className="footer__ctnr--bx">
          <h2>Services</h2>
          <div className="footer__cntr--bx-lb">
            <ul className="el-ul">
              <li className="el-ul-li">
                <Link className="el-ul-li-item">Contact Us</Link>
              </li>
              <li className="el-ul-li">
                <Link className="el-ul-li-item">Privacy Policy</Link>
              </li>
              <li className="el-ul-li">
                <Link className="el-ul-li-item">Terms of Services</Link>
              </li>
              <li className="el-ul-li">
                <Link className="el-ul-li-item">FAQs</Link>
              </li>
              <li className="el-ul-li">
                <Link className="el-ul-li-item">Developer API</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__ctnr--bx">
          <h2>Company</h2>
          <ul className="el-ul">
            <li className="el-ul-li">
              <Link className="el-ul-li-item">About Us</Link>
            </li>
            <li className="el-ul-li">
              <Link className="el-ul-li-item">Our Team</Link>
            </li>
            <li className="el-ul-li">
              <Link className="el-ul-li-item">Blogs</Link>
            </li>
            <li className="el-ul-li">
              <Link to={"career"} className="el-ul-li-item">
                Career
              </Link>
            </li>
            <li className="el-ul-li">
              <Link className="el-ul-li-item">Partnership</Link>
            </li>
          </ul>
        </div>
        <div className="footer__ctnr--bx">
          <h2>Social Media</h2>
          <ul className="el-ul">
            <li className="el-ul-li">
              <Link className="el-ul-li-item">Facebook</Link>
            </li>
            <li className="el-ul-li">
              <Link className="el-ul-li-item">Instagram</Link>
            </li>
            <li className="el-ul-li">
              <Link className="el-ul-li-item">Twitter</Link>
            </li>
            <li className="el-ul-li">
              <Link className="el-ul-li-item">Linkedin</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copytext">
        <span className="el-copytext">
          &copy; 2023, Designed & Manage By{" "}
          <a
            target="_blank"
            href="https://kupendra.netlify.app"
            className="el-userprofile"
          >
            Upendra Kumar
          </a>
        </span>
      </div>
      <div className="footer__image">
        <img
          className="footer__image--img"
          src="https://c.ndtvimg.com/2023-08/5cnea5l_chicken-gravy_625x300_02_August_23.jpg"
          alt="Recipe"
        />
      </div>
    </footer>
  );
};

export default Footer;

export const FooterHeading = () => {
  return (
    <div className="footer__heading">
      <div className="footer__heading--text">
        <h1>Recipes House</h1>
      </div>
      <div className="footer__social--icons">
        <Link className="footer__social--icons-item">
          <i className="fa-links fa-brands fa-square-facebook"></i>
        </Link>
        <Link className="footer__social--icons-item">
          <i className="fa-links fa-brands fa-square-instagram"></i>
        </Link>
        <Link className="footer__social--icons-item">
          <i className="fa-links fa-brands fa-x-twitter"></i>
        </Link>
        <Link className="footer__social--icons-item">
          <i className="fa-links fa-brands fa-linkedin"></i>
        </Link>
      </div>
    </div>
  );
};
