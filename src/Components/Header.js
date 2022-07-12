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
              <i class="fa-regular fa-heart"></i>
              <p>Your Wishlist</p>
            </div>
            <div className="cart">
              <i class="fa-solid fa-cart-shopping"></i>
              <p>Your Cart</p>
            </div>
            <div className="menuIcon" onClick={handleMenuActive}>
              <i class="fa-solid fa-bars"></i>
              <p>Menu</p>
            </div>
          </div>
          <nav className={`navBar ${menuActive && "active"} `}>
            <ul>
              <li>Home</li>
              <li>Hot Deals</li>
              <li>Categories</li>
              <li>Laptops</li>
              <li>SmartPhones</li>
              <li>Cameras</li>
            </ul>
          </nav>
        </div>
      </header>

      <nav className="newNavBar ">
        <ul className="container">
          <li>Home</li>
          <li>Hot Deals</li>
          <li>Categories</li>
          <li>Laptops</li>
          <li>SmartPhones</li>
          <li>Cameras</li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
