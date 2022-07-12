import "../StyleSheets/TopSellingProducts.css";

function GridProducts({ data }) {
  return (
    <div className="top-selling-products-container container">
      {data.map((item) => (
        <div className="card" key={item.id}>
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
                <i className="fa-solid fa-heart"></i>
              </p>
              <p>
                <i className="fa-solid fa-cart-shopping"></i>
              </p>
              <p>
                <i className="fa-solid fa-circle-info"></i>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default GridProducts;
