import "../StyleSheets/ProductSection.css";
import GridProducts from "./GridProducts";

function ProductSection({ title, data }) {
  return (
    <div className="top-product-section container">
      <div className="top">
        <h2 className="section-title">{title}</h2>
        <ul className="categories">
          <li>All</li>
          <li>Smartphone</li>
          <li>Laptop</li>
          <li>TV</li>
        </ul>
      </div>
      <GridProducts data={data} />
    </div>
  );
}
export default ProductSection;
