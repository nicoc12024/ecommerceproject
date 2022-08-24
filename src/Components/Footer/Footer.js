import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <a className="footer__icon-container" href="#top">
        <i className="fa-solid fa-angles-up btnRed"></i>
      </a>
      <ul className="footer__social-icons">
        <li>
          <a href="facebook.com">
            <i className="fa-brands fa-facebook fa-2x "></i>
          </a>
        </li>
        <li>
          <a href="instagram.com">
            <i className="fa-brands fa-instagram fa-2x "></i>
          </a>
        </li>
        <li>
          <a href="instagram.com">
            <i className="fa-solid fa-envelope fa-2x "></i>
          </a>
        </li>
      </ul>
      <p>© 2022 Copyright: Nicolas Cabello</p>
    </footer>
  );
}
export default Footer;
