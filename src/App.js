import "./App.css";
import Header from "./Components/Header";
import HotDeals from "./Components/HotDeals";
import ProductSection from "./Components/ProductSection";
import ThisWeekOff from "./Components/ThisWeekOff";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HotDeals />
      <ProductSection />
      <ThisWeekOff />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
