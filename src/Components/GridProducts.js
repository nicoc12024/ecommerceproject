import "../StyleSheets/TopSellingProducts.css";
import { topSellingData } from "./topSellingArray";

function GridProducts() {
  return (
    <div className="top-selling-products-container container">
      {topSellingData.map((item) => (
        <div className="card">
          <img src={item.image} alt="bed" />
          <div className="info">
            {item.discount && <p className="discount">{item.discount}</p>}
            <p>
              {item.category} <br />
            </p>
            <p className="bold">
              {item.model} <br />
            </p>
            <p className="red">
              {item.price} <br />
            </p>
            <div className="action-buttons">
              <p>
                <i class="fa-solid fa-heart"></i>
              </p>
              <p>
                <i class="fa-solid fa-cart-shopping"></i>
              </p>
              <p>
                <i class="fa-solid fa-circle-info"></i>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default GridProducts;
