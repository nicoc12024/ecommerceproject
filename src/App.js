import "./App.css";
import Header from "./Components/Header";
import HotDeals from "./Components/HotDeals";
import Products from "./Components/Products";
import ThisWeekOff from "./Components/ThisWeekOff";
import { topSellingData } from "./Components/topSellingArray";

function App() {
  return (
    <div className="App">
      <Header />
      <HotDeals />
      <Products title="Top Selling" data={topSellingData} />
      <ThisWeekOff />
      <Products title="Hot Deals" /* array B */ />
    </div>
  );
}

export default App;
