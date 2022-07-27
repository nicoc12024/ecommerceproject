function Item({ product }) {
  return (
    <div className="card" key={product.id}>
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
            {product.price} <br />
          </p>
          <p className="priceBefore">
            {product.priceBefore} <br />
          </p>
        </div>
        <div className="action-button">
          <button className="see-details">See Details</button>
        </div>
      </div>
    </div>
  );
}
export default Item;
