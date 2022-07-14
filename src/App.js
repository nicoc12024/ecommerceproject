import "./App.css";
import Header from "./Components/Header";
import HotDeals from "./Components/HotDeals";
import ProductSection from "./Components/ProductSection";
import ThisWeekOff from "./Components/ThisWeekOff";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
import { topSellingData } from "./Components/topSellingArray";
import { hotDealData } from "./Components/hotDealArray";

function App() {
  return (
    <div className="App">
      <Header />
      <HotDeals />
      <ProductSection title="Top Selling" data={topSellingData} />
      <ThisWeekOff />
      <ProductSection title="Hot Deals" data={hotDealData} />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
