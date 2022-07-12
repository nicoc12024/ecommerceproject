import "../StyleSheets/TopSelling.css";
import TopSellingProducts from "./TopSellingProducts";

function TopSelling() {
  return (
    <div className="top-selling container">
      <div className="top">
        <h2 className="section-title">Top Selling</h2>
        <ul className="categories">
          <li>Smartphone</li>
          <li>Laptop</li>
          <li>TV</li>
        </ul>
      </div>
      <TopSellingProducts />
    </div>
  );
}
export default TopSelling;
