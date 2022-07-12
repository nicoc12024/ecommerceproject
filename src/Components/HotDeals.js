import Slider from "react-slick";
import "../StyleSheets/HotDeals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselDataImages } from "./CarouselData";

function HotDeals() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          autoplay: true,
          autoplaySpeed: 2500,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2500,
        },
      },
    ],
  };

  return (
    <div>
      <div className="title">Hot Deals</div>
      <Slider {...settings} className="hotDealsCarousel">
        {carouselDataImages.map((item) => (
          <div className="card">
            <img src={item.image} alt="bed" />
            <div className="info">
              <p className="bold">
                {item.title} <br /> Collection
              </p>
              <p className="uppercase">
                Shop Now <i class="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default HotDeals;
