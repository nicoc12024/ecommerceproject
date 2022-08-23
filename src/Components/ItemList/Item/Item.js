import { Link } from "react-router-dom";
import "./Item.css";

function Item({ product }) {
  const handleCLick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="card-item" onClick={handleCLick}>
      <img src={product.image} alt="bed" />
      <div className="info">
        {product.discount && <p className="discount">{product.discount}</p>}
        <p className="brand">
          {product.brand} <br />
        </p>
        <p className="bold model">
          {product.model} <br />
        </p>
        <div className="prices">
          <p className="red">
            ${product.price} <br />
          </p>
          <p className="priceBefore">
            {product.priceBefore} <br />
          </p>
        </div>
        <div className="action-button">
          <Link to={`/detail/${product.id}`} className="btnRed">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Item;
