import "../StyleSheets/ProductSection.css";
import GridProducts from "./GridProducts";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function ProductSection({ title, data }) {
  const [originalData, setOriginalData] = useState(data);
  const [actualData, setActualData] = useState(originalData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [actualData]);

  const showSmartphone = () => {
    setActualData(originalData.filter((item) => item.category === "smartphone"));
  };

  const showLaptop = () => {
    setActualData(originalData.filter((item) => item.category === "laptop"));
  };

  const showTv = () => {
    setActualData(originalData.filter((item) => item.category === "tv"));
  };

  const showBest = () => {
    setActualData(originalData);
  };

  return (
    <div className="top-product-section container">
      <div className="top">
        <h2 className="section-title">{title}</h2>
        <ul className="categories">
          <li onClick={showBest}>Best</li>
          <li onClick={showSmartphone}>Smartphone</li>
          <li onClick={showLaptop}>Laptop</li>
          <li onClick={showTv}>TV</li>
        </ul>
      </div>

      <div className="spinner-center">
        {loading ? (
          <ClipLoader color={"red"} loading={loading} size={100} />
        ) : (
          <GridProducts data={actualData} />
        )}
      </div>
    </div>
  );
}
export default ProductSection;
