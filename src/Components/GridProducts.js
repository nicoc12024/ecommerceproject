import "../StyleSheets/GridProducts.css";

function GridProducts({ data }) {
  const dataSliced = data.slice(0, 4);

  return (
    <div className="top-grid-products-container ">
      {dataSliced.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt="bed" />
          <div className="info">
            {item.discount && <p className="discount">{item.discount}</p>}
            <p className="brand">
              {item.brand} <br />
            </p>
            <p className="bold model">
              {item.model} <br />
            </p>
            <div className="prices">
              <p className="red">
                {item.price} <br />
              </p>
              <p className="priceBefore">
                {item.priceBefore} <br />
              </p>
            </div>
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
