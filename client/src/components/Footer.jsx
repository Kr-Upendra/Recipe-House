import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};

export default Footer;
