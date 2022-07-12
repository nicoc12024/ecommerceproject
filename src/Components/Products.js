import "../StyleSheets/TopSelling.css";
import GridProducts from "./GridProducts";

function Products({ title, data }) {
  return (
    <div className="top-selling container">
      <div className="top">
        <h2 className="section-title">{title}</h2>
        <ul className="categories">
          <li>Smartphone</li>
          <li>Laptop</li>
          <li>TV</li>
        </ul>
      </div>
      <GridProducts data={data} />
    </div>
  );
}
export default Products;
