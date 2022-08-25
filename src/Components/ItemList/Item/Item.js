import { Link } from "react-router-dom";
import "./Item.css";

function Item({ product }) {
  const handleCLick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="cardItem" onClick={handleCLick}>
      <img src={product.image} alt="bed" />
      <div className="cardItem__info">
        {product.discount && <p className="cardItem__discount">{product.discount}</p>}
        <p className="cardItem__brand">
          {product.brand} <br />
        </p>
        <p className="cardItem__bold model">
          {product.model} <br />
        </p>
        <div className="cardItem__prices">
          <p className="red">
            ${product.price} <br />
          </p>
          <p className="cardItem__priceBefore">
            {product.priceBefore} <br />
          </p>
        </div>
        <div className="cardItem__actionButton">
          <Link to={`/detail/${product.id}`} className="btnRed">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Item;
