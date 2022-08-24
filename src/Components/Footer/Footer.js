import "./Footer.css";

function Footer() {
  return (
    <footer class="footer">
      <a class="footer__icon-container" href="#top">
        <i class="fa-solid fa-angles-up btnRed"></i>
      </a>
      <ul class="footer__social-icons">
        <li>
          <a href="#">
            <i class="fa-brands fa-facebook fa-2x "></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-brands fa-instagram fa-2x "></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-solid fa-envelope fa-2x "></i>
          </a>
        </li>
      </ul>
      <p>© 2022 Copyright: Nicolas Cabello</p>
    </footer>
  );
}
export default Footer;
