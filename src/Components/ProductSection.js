import "../StyleSheets/ProductSection.css";
import { useState, useEffect } from "react";
import { getTopSellingProducts } from "./topSellingArray";

// import ClipLoader from "react-spinners/ClipLoader";

function ProductSection({ title, data }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getTopSellingProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, [actualData]);

  // const showSmartphone = () => {
  //   setActualData(originalData.filter((item) => item.category === "smartphone"));
  // };

  // const showLaptop = () => {
  //   setActualData(originalData.filter((item) => item.category === "laptop"));
  // };

  // const showTv = () => {
  //   setActualData(originalData.filter((item) => item.category === "tv"));
  // };

  // const showBest = () => {
  //   setActualData(originalData);
  // };

  return (
    <div className="top-product-section container">
      <div className="top">
        <h2 className="section-title">{title}</h2>
        <ul className="categories">
          <li>Best</li>
          <li>Smartphone</li>
          <li>Laptop</li>
          <li>TV</li>
        </ul>
      </div>

      <div className="spinner-center">
        {/* {loading ? (
          <ClipLoader color={"red"} loading={loading} size={100} />
        ) : (
          <GridProducts data={actualData} />
        )} */}
        <div className="top-grid-products-container ">
          {products.map((item) => (
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
                    <i className="fa-solid fa-circle-info"></i>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProductSection;
