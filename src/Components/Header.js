import "../StyleSheets/Header.css";
import { useState } from "react";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  // Toggle Menu
  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <header className="header">
        <div className="container headerWide">
          <div className="name">
            <h1>
              Electro Buy<span>.</span>
            </h1>
          </div>
          <div className="wishListCartMenu">
            <div className="wishList">
              <i className="fa-regular fa-heart"></i>
              <p>Your Wishlist</p>
              <p className="wish-list-items">(4)</p>
            </div>
            <div className="cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Your Cart</p>
              <p className="cart-items">(10)</p>
            </div>
            <div className="menuIcon" onClick={handleMenuActive}>
              <i className="fa-solid fa-bars"></i>
              <p>Menu</p>
            </div>
          </div>
          <nav className={`navBar ${menuActive && "active"} `}>
            <ul>
              <li>Top Selling</li>
              <li>Hot Deals</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div>
      </header>

      <nav className="newNavBar ">
        <ul className="container">
          <li>Top Selling</li>
          <li>Hot Deals</li>
          <li>Suscribe to Our Newsletter</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
