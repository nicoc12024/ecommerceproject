const products = [
  {
    id: "1",
    brand: "Apple",
    category: "laptop",
    added: "New",
    model: "MacBook Pro",
    price: "$2499",
    priceBefore: "$2699",
    discount: "-10% ",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "2",
    brand: "Samsung",
    category: "tv",
    added: "New",
    model: "AU7175 LED",
    price: "$3299",
    priceBefore: "$3999",
    discount: "-15%",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002868757/293463/samsung-85-au7175-4k-led-2021--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "3",
    brand: "Apple",
    category: "laptop",
    added: "New",
    model: "Macbook air",
    price: "$1999",
    priceBefore: "$2299",
    discount: "-15%",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "4",
    brand: "Samsung",
    category: "smartphone",
    added: "New",
    model: "Samsung s22",
    price: "$2400",
    image:
      " https://www.elgiganten.se/image/dv_web_D180001002929923/414961/samsung-galaxy-s22-5g-smartphone-8128gb-phantom-black--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "5",
    brand: "Apple",
    category: "laptop",
    added: "New",
    model: "MacBook Pro",
    price: "$2499",
    priceBefore: "$2699",
    discount: "-10% ",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "6",
    brand: "Samsung",
    category: "tv",
    added: "New",
    model: "AU7175 LED",
    price: "$3299",
    priceBefore: "$3999",
    discount: "-15%",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002868757/293463/samsung-85-au7175-4k-led-2021--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "7",
    brand: "Apple",
    category: "laptop",
    added: "New",
    model: "Macbook air",
    price: "$1999",
    priceBefore: "$2299",
    discount: "-15%",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "8",
    brand: "Samsung",
    category: "smartphone",
    added: "New",
    model: "Samsung s22",
    price: "$2400",
    image:
      " https://www.elgiganten.se/image/dv_web_D180001002929923/414961/samsung-galaxy-s22-5g-smartphone-8128gb-phantom-black--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "9",
    brand: "Apple",
    category: "laptop",
    added: "New",
    model: "MacBook Pro",
    price: "$2499",
    priceBefore: "$2699",
    discount: "-10% ",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "10",
    brand: "Samsung",
    category: "tv",
    added: "New",
    model: "AU7175 LED",
    price: "$3299",
    priceBefore: "$3999",
    discount: "-15%",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002868757/293463/samsung-85-au7175-4k-led-2021--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "11",
    brand: "Apple",
    category: "laptop",
    added: "New",
    model: "Macbook air",
    price: "$1999",
    priceBefore: "$2299",
    discount: "-15%",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "12",
    brand: "Samsung",
    category: "smartphone",
    added: "New",
    model: "Samsung s22",
    price: "$2400",
    image:
      " https://www.elgiganten.se/image/dv_web_D180001002929923/414961/samsung-galaxy-s22-5g-smartphone-8128gb-phantom-black--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "13",
    brand: "Apple",
    category: "laptop",
    added: "New",
    model: "MacBook Pro",
    price: "$2499",
    priceBefore: "$2699",
    discount: "-10% ",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "14",
    brand: "Samsung",
    category: "tv",
    added: "New",
    model: "AU7175 LED",
    price: "$3299",
    priceBefore: "$3999",
    discount: "-15%",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002868757/293463/samsung-85-au7175-4k-led-2021--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "15",
    brand: "Apple",
    category: "laptop",
    added: "New",
    model: "Macbook air",
    price: "$1999",
    priceBefore: "$2299",
    discount: "-15%",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "16",
    brand: "Samsung",
    category: "smartphone",
    added: "New",
    model: "Samsung s22",
    price: "$2400",
    image:
      " https://www.elgiganten.se/image/dv_web_D180001002929923/414961/samsung-galaxy-s22-5g-smartphone-8128gb-phantom-black--pdp_zoom-3000--pdp_main-960.jpg",
  },
];

export const getTopSellingProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
};
